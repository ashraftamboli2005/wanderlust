const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const Listing = require("../models/listing.js");
const {
  isLoggedIn,
  isOwner,
  validateListing,
} = require("../middleware.js");
const listingController = require("../controllers/listings.js");
const multer = require("multer");
const {storage}=require("../cloudConfig.js");
const upload = multer({ storage });


// INDEX and CREATE ("/listings")
router
  .route("/")
  .get(wrapAsync(listingController.index))
  .post(
    isLoggedIn,
    
    upload.single("listingImage"),
    validateListing,
    wrapAsync(listingController.createListing)
  );

// NEW ("/listings/new")
router.get("/new", isLoggedIn, listingController.renderNewForm);



router.get("/search", async (req, res) => {
  const { q } = req.query;

  const listing = await Listing.findOne({
    title: { $regex: q, $options: "i" }
  });

  if (listing) {
    return res.redirect(`/listings/${listing._id}`);
  } else {
    req.flash("error", "No such listing available");
    return res.redirect("/listings");
  }
});

// SHOW, UPDATE, DELETE ("/listings/:id")
router
  .route("/:id")
  .get(wrapAsync(listingController.showListing))
  .put(
    isLoggedIn,
    isOwner,
     upload.single("listingImage"),
    validateListing,
    wrapAsync(listingController.updateListing)
  )
  .delete(isLoggedIn, isOwner, wrapAsync(listingController.deleteListing));

// EDIT ("/listings/:id/edit")
router.get("/:id/edit", isLoggedIn, isOwner, listingController.renderEditForm);

module.exports = router;
