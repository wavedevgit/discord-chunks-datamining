/** Chunk was on 83051 **/
/** chunk id: 223356, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Tj: () => m,
  WG: () => u,
  ZD: () => p,
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
async function u() {
  return (await r.tn.get({
    url: s.ANM.BUG_REPORTS,
    rejectWithError: false
  })).body
}

function d(e) {
  var t;
  return null != (t = null == e ? true : e.name) ? t : "" + (null == e ? true : e.squad)
}

function m() {
  return [{
    title: c.intl.string(c.t.VwIij9),
    description: c.intl.format(c.t.DOP8yY, {}),
    emoji: "801497159479722084",
    value: 0
  }, {
    title: c.intl.string(c.t.rYfJop),
    description: c.intl.format(c.t["+LEfDL"], {}),
    emoji: "410336837563973632",
    value: 1
  }, {
    title: c.intl.string(c.t["9LSuy3"]),
    description: c.intl.format(c.t.nC7pvx, {}),
    emoji: "841420679643529296",
    value: 2
  }, {
    title: c.intl.string(c.t.Ia0ska),
    description: c.intl.format(c.t.D4rbgX, {}),
    emoji: "827645852352512021",
    value: 3
  }]
}
async function p(e, t, n) {
  var r, c;
  let u = [{
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
  "" !== e.description && u.push({
    name: "description",
    value: e.description
  }), "" !== e.url && u.push({
    name: "external_url",
    value: e.url
  }), null != e.buildOverride && u.push({
    name: "build_override",
    value: e.buildOverride
  }), null != e.experimentOverrides && u.push({
    name: "experiment_overrides",
    value: e.experimentOverrides.map(e => "".concat(e.experimentId, ":").concat(e.variantId)).join(",")
  });
  let d = null == (r = e.feature) ? true : r.asana_inbox_id;
  null != d && "" !== d && u.push({
    name: "asana_inbox_id",
    value: "".concat(d)
  });
  let m = null == (c = e.feature) ? true : c.name;
  null != m && "" !== m && u.push({
    name: "feature_name",
    value: m
  }), t.overridePlatformInformation && (u.push({
    name: "device",
    value: t.device
  }), u.push({
    name: "os",
    value: t.operatingSystem
  }), u.push({
    name: "os_version",
    value: t.operatingSystemVersion
  }), u.push({
    name: "client_version",
    value: t.clientVersion
  }), u.push({
    name: "client_build_number",
    value: t.clientBuildNumber
  }), u.push({
    name: "release_channel",
    value: window.GLOBAL_ENV.RELEASE_CHANNEL
  }), u.push({
    name: "locale",
    value: t.locale
  })), (0, l.E)(s.GU0.WEB_APP);
  try {
    return await o.Z.post({
      url: s.ANM.BUG_REPORTS,
      attachments: n,
      fields: u,
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