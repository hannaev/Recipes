import { NextApiRequest, NextApiResponse } from 'next'
import { sampleRecipeData } from '../../../utils/sample-recipes'

const handler = (_req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (!Array.isArray(sampleRecipeData)) {
      throw new Error('Cannot find recipe data')
    }

    res.status(200).json(sampleRecipeData)
  } catch (err) {
    res.status(500).json({ statusCode: 500, message: err.message })
  }
}

export default handler
