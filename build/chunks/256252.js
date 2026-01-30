/** Chunk was on 81008 **/
/** chunk id: 256252, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  lx: () => m,
  wY: () => d,
  xt: () => c,
  zC: () => v
}), require("./228524.js"), require("./321073.js");
var Chunk110259 = require("./110259.js"),
  Chunk562465 = require("./562465.js"),
  Chunk98919 = require("./98919.js"),
  Chunk544028 = require("./544028.js");
require("./723702.js");
var Chunk499785 = require("./499785.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");
async function c() {
  return (await l.Bo.get({
    url: s.Rsh.BUG_REPORTS,
    rejectWithError: false
  })).body
}

function d(e) {
  var t;
  return null != (t = null == e ? true : e.name) ? t : "" + (null == e ? true : e.squad)
}

function m() {
  return [{
    title: u.intl.string(u.t.VwIij9),
    description: u.intl.format(u.t.DOP8yY, {}),
    emoji: "801497159479722084",
    value: 0
  }, {
    title: u.intl.string(u.t.rYfJop),
    description: u.intl.format(u.t["+LEfDL"], {}),
    emoji: "410336837563973632",
    value: 1
  }, {
    title: u.intl.string(u.t["9LSuy3"]),
    description: u.intl.format(u.t.nC7pvx, {}),
    emoji: "841420679643529296",
    value: 2
  }, {
    title: u.intl.string(u.t.Ia0ska),
    description: u.intl.format(u.t.D4rbgX, {}),
    emoji: "827645852352512021",
    value: 3
  }]
}
async function v(e, t, n) {
  var l, u;
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
    value: a.A.theme
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
  let d = null == (l = e.feature) ? true : l.asana_inbox_id;
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
  })), (0, r.a)(s.Umv.WEB_APP);
  try {
    return await o.A.post({
      url: s.Rsh.BUG_REPORTS,
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