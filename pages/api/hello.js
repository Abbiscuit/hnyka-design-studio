// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
  try {
    res.status(200).json({ message: 'John Doe 3rd' });
  } catch (err) {
    console.error(err.message);
  }
};
