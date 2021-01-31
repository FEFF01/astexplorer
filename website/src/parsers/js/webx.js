import defaultParserInterface from './utils/defaultESTreeParserInterface';
import Webx from '../../../../../js/parser';

let webx = new Webx();

const ID = 'webx';

export default {
  ...defaultParserInterface,
  id: ID,
  displayName: ID,
  showInMenu: true,
  locationProps: new Set(['range', 'loc']),

  loadParser(callback) {
    callback(webx);
  },
  parse(esprima, code) {
    return esprima.parseModule(code);
  }
};
