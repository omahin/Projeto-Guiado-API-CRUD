let filterById = (model, id) => {
    let filteredData = model.find(item => item.id == id);
   
   return filteredData;
    // let filteredData = model.find((travel) => {
    //     return travel.id == id
    // });
    // return filteredData;
};

module.exports = {
    filterById
};