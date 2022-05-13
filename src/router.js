"use strict";
exports.__esModule = true;
exports.router = void 0;
var express_1 = require("express");
var profiles_1 = require("./api/profiles");
var router = (0, express_1.Router)();
exports.router = router;
router.get("/profiles", profiles_1.getAllProfiles);
router.post("/profiles", profiles_1.createProfile);
router.patch("/profiles/:id", profiles_1.updateProfiles);
router["delete"]("/profiles/:id", profiles_1.deleteProfile);
router.get("/profiles/:id", profiles_1.getProfileByID);
