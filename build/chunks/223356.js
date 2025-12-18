/** Chunk was on 83051 **/
/** chunk id: 223356, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Tj: () => m,
  WG: () => c,
  ZD: () => f,
  pD: () => d
}), require("./953529.js"), require("./539854.js");
var Chunk990547 = require("./990547.js"),
  Chunk544891 = require("./544891.js"),
  Chunk729345 = require("./729345.js"),
  Chunk210887 = require("./210887.js");
require("./358085.js");
var Chunk573261 = require("./573261.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");
async function c() {
  return (await Chunk544891.tn.get({
    url: Chunk981631.ANM.BUG_REPORTS,
    rejectWithError: false
  })).body
}

function d(e) {
  var t;
  return null != (t = null == e ? true : e.name) ? t : "" + (null == e ? true : e.squad)
}

function m() {
  return [{
    title: Chunk388032.intl.string(Chunk388032.t.VwIij9),
    description: Chunk388032.intl.format(Chunk388032.t.DOP8yY, {}),
    emoji: "801497159479722084",
    value: 0
  }, {
    title: Chunk388032.intl.string(Chunk388032.t.rYfJop),
    description: Chunk388032.intl.format(Chunk388032.t["+LEfDL"], {}),
    emoji: "410336837563973632",
    value: 1
  }, {
    title: Chunk388032.intl.string(Chunk388032.t["9LSuy3"]),
    description: Chunk388032.intl.format(Chunk388032.t.nC7pvx, {}),
    emoji: "841420679643529296",
    value: 2
  }, {
    title: Chunk388032.intl.string(Chunk388032.t.Ia0ska),
    description: Chunk388032.intl.format(Chunk388032.t.D4rbgX, {}),
    emoji: "827645852352512021",
    value: 3
  }]
}
async function f(e, t, n) {
  var r, u;
  let c = [{
    name: "name",
    value: e.name
  }, {
    name: "priority",
    value: "".concat(e.priority)
  }, {
    name: "override_platform_information",
    value: "".concat(t.overridePlatformInformation)
  }, {
    name: "theme",
    value: a.Z.theme
  }];
  "" !== e.description && c.push({
    name: "description",
    value: e.description
  }), "" !== e.url && c.push({
    name: "external_url",
    value: e.url
  }), null != e.buildOverride && c.push({
    name: "build_override",
    value: e.buildOverride
  }), null != e.experimentOverrides && c.push({
    name: "experiment_overrides",
    value: e.experimentOverrides.map(e => "".concat(e.experimentId, ":").concat(e.variantId)).join(",")
  });
  let d = null == (r = e.feature) ? true : r.asana_inbox_id;
  null != d && "" !== d && c.push({
    name: "asana_inbox_id",
    value: "".concat(d)
  });
  let m = null == (u = e.feature) ? true : u.name;
  null != m && "" !== m && c.push({
    name: "feature_name",
    value: m
  }), t.overridePlatformInformation && (c.push({
    name: "device",
    value: t.device
  }), c.push({
    name: "os",
    value: t.operatingSystem
  }), c.push({
    name: "os_version",
    value: t.operatingSystemVersion
  }), c.push({
    name: "client_version",
    value: t.clientVersion
  }), c.push({
    name: "client_build_number",
    value: t.clientBuildNumber
  }), c.push({
    name: "release_channel",
    value: window.GLOBAL_ENV.RELEASE_CHANNEL
  }), c.push({
    name: "locale",
    value: t.locale
  })), (0, l.E)(s.GU0.WEB_APP);
  try {
    return await o.Z.post({
      url: s.ANM.BUG_REPORTS,
      attachments: n,
      fields: c,
      trackedActionData: {
        event: i.NetworkActionNames.BUG_REPORT_SUBMIT,
        properties: {
          priority: e.priority,
          asana_inbox_id: d
        }
      },
      rejectWithError: false
    })
  } catch (e) {
    return e
  }
}