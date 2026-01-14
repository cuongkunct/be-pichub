export const imageService = {
  async create(req) {
    return `This action create`;
  },

  async findAll(req) {
    return `This action returns all image`;
  },

  async findOne(req) {
    return `This action returns a id: ${req.params.id} image`;
  },

  async update(req) {
    return `This action updates a id: ${req.params.id} image`;
  },

  async remove(req) {
    return `This action removes a id: ${req.params.id} image`;
  },
};
