const database = require('../models')
const uuid = require('uuid')

class RoleService {
    async cadastrar(dto){
        const role = await database.roles.findOne({
            where: {
                nome: dto.nome
            }
        })
        if(role) {
            throw new Error('Role já cadastrado')
        }
        try {
            const newRole = await database.roles.create({
                id: uuid.v4(),
                nome: dto.nome,
                descricao: dto.descricao
            })
            return newRole
        } catch (error) {
            throw new Error('Erro ao cadastrar')            
        }
    }
}

module.exports = RoleService