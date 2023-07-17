const validateFieldTitle = (req, res ,next) => {
  const {body} = req;
  if(body.title === undefined){
    return res.status(400).json({message:'O campo titulo é obrigátorio.'});
  }
  if(body.title === ''){
    return res.status(400).json({message:'O campo titulo não pode ser vazio.'});
  }

  next();
};
const validateFieldStatus = (req, res ,next) => {
  const {body} = req;
  if(body.status === undefined){
    return res.status(400).json({message:'O campo status é obrigátorio.'});
  }
  if(body.status === ''){
    return res.status(400).json({message:'O campo status não pode ser vazio.'});
  }

  next();
};

module.exports ={
  validateFieldTitle,
  validateFieldStatus
};