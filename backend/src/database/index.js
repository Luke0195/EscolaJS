import Sequelize from 'sequelize';
import dbConfig from '../config/database';
import Aluno from '../models/Aluno';
import User from '../models/User';
import Photo from '../models/Photo';

const connection = new Sequelize(dbConfig);

const models = [Aluno, User, Photo];

models.forEach((model) => model.init(connection));
models.forEach((model) => model.associate && model.associate(connection.models));
