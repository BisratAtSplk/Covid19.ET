import feathersClient, {
  makeServicePlugin,
  BaseModel
} from "~/plugins/feathers-client";

class Stats extends BaseModel {
  constructor(data, options) {
    super(data, options);
  }
  // Required for $FeathersVuex plugin to work after production transpile.
  static modelName = "stats";
  // Define default properties here
  static instanceDefaults() {
    return {};
  }
}
const servicePath = "stats";
const servicePlugin = makeServicePlugin({
  Model: Stats,
  addOnUpsert: true,
  service: feathersClient.service(servicePath),
  servicePath
});

// Setup the client-side Feathers hooks.
feathersClient.service(servicePath).hooks({
  before: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },
  after: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },
  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
});

export default servicePlugin;
