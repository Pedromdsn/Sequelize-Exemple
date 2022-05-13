import { Router } from "express"
import { createProfile, deleteProfile, getAllProfiles, getProfileByID, updateProfiles } from "./api/profiles"

const router = Router()

router.get("/profiles", getAllProfiles)
router.post("/profiles", createProfile)
router.patch("/profiles/:id", updateProfiles)
router.delete("/profiles/:id", deleteProfile)
router.get("/profiles/:id", getProfileByID)

export { router }
