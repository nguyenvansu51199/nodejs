import { Request, Response } from 'express';
import { getAllUsers, handleCreateUser } from 'services/user.service';
const getHomePage = async (req: Request, res: Response) => {
  //get users
  const users = await getAllUsers();

  return res.render('home', {
    users,
  });
};

const getCreateUserPage = (req: Request, res: Response) => {
  return res.render('create-user');
};

const postCreateUserPage = async (req: Request, res: Response) => {
  console.log('data: ', req.body);
  const { name, email, address } = req.body;

  await handleCreateUser(name, email, address);
  return res.redirect('/');
};

export { getHomePage, getCreateUserPage, postCreateUserPage };
