const models = require("../models");

const getEpisode = async () => {
  try {
    //    return await models.Episodes.findOne({
    //         where: {
    //            id: 1
    //         }
    //     })
  } catch (error) {
    console.log("getEpisode service error: ", error);
    throw error;
  }
};

const getAllEpisodes = async () => {
  try {
    console.log("mdl: ", models);
    // return await models.Episodes.findAll()
  } catch (error) {
    console.log("getEpisodes service error: ", error);
    throw error;
  }
};

const createEpisode = async () => {
  try {
  } catch (error) {
    console.log("getEpisode service error: ", error);
    throw error;
  }
};

const updateEpisode = async () => {
  try {
  } catch (error) {
    console.log("getEpisode service error: ", error);
    throw error;
  }
};

module.exports = {
  getEpisode,
  getAllEpisodes,
  createEpisode,
  updateEpisode
};
