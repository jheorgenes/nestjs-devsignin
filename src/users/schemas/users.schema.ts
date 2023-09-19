import * as mongoose from "mongoose";
import * as bcrypt from 'bcrypt'

//Definindo Schema do mongoose para Usuários
export const UsersSchema = new mongoose.Schema({
  name: {
    type: String
  },
  email: {
    type: String
  },
  password: {
    type: String
  }
});

// Fazendo uma validação antes de salvar no mongoose para encryptação de senhas
UsersSchema.pre('save', async function(next: mongoose.CallbackWithoutResultAndOptionalError) {
  try {
    // Se a senha não foi modificada, não faça nada
    if(!this.isModified('password')) {
      return next();
    }

    // Se foi modificada, faça a encryptação
    this['password'] = await bcrypt.hash(this['password'], 10);

  } catch (error) {
    return next(error);
  }
})