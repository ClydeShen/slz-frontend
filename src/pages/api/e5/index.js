import createSuperbaseServerClient from 'utils/lib/supabase/server'

const handler = async (req, res) => {
  const { method } = req
  const supabaseClient = createSuperbaseServerClient(req, res)
}

export default handler
