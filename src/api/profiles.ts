import { Request, Response } from "express"
import { Profile } from "../db/model/Profile"

// CRUD
// Create
// Read
// Update
// Delete

export const createProfile = async (req: Request, res: Response) => {
  const profile = await Profile.create(req.body)
  return res.json(profile)
}

export const getAllProfiles = async (req: Request, res: Response) => {
  const profile = await Profile.findAll()
  return res.json(profile)
}

export const updateProfiles = async (req: Request, res: Response) => {
  const profile = await Profile.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
  return res.json(profile)
}

export const deleteProfile = async (req: Request, res: Response) => {
	const profile = await Profile.destroy({
		where: {
			id: req.params.id,
		},
	})
	return res.json(profile)
}

export const getProfileByID = async (req: Request, res: Response) => {
	const profile = await Profile.findByPk(req.params.id)
	return res.json(profile)
}