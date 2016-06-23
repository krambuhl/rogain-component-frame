const createFrame = require('rogain-utils').createFrame;
module.exports = function Children(tree, props) {
  return createFrame(tree.children, tree.attribs);
};