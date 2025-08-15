/** Chunk was on 54157 **/
/** chunk id: 579612, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  GQ: () => S,
  MC: () => g,
  P: () => m,
  ZP: () => y
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk933557 = require("./933557.js"),
  Chunk471445 = require("./471445.js"),
  Chunk266076 = require("./266076.jsx"),
  Chunk592125 = require("./592125.js"),
  Chunk699516 = require("./699516.js"),
  Chunk246946 = require("./246946.js"),
  Chunk594174 = require("./594174.js"),
  Chunk51144 = require("./51144.js"),
  Chunk495824 = require("./495824.js");

function g(e) {
  let {
    channel: t
  } = e;
  if (t.isDM()) {
    let e = t.getRecipientId(),
      n = p.default.getUser(e);
    if (null == n) return null;
    let s = n.getAvatarURL(null, 20);
    return (0, r.jsx)(a.qEK, {
      "aria-hidden": true,
      className: _.searchResultDMChannelIcon,
      size: a.EFr.SIZE_20,
      src: s
    })
  }
  if (t.isGroupDM()) return (0, r.jsx)(c.Z, {
    "aria-hidden": true,
    className: _.searchResultGDMChannelIcon,
    channel: t,
    size: a.EFr.SIZE_20,
    experimentLocation: "search_popout"
  });
  let n = (0, o.KS)(t);
  return null == n ? null : (0, r.jsx)(n, {
    className: _.searchResultChannelIcon
  })
}

function S(e) {
  let {
    channel: t
  } = e;
  return t.isDM() || t.isGroupDM() ? (0, r.jsx)("span", {
    className: _.searchResultDMChannelName,
    children: (0, i.F6)(t, p.default, d.Z)
  }) : (0, r.jsx)("strong", {
    children: (0, i.F6)(t, p.default, d.Z)
  })
}

function m(e) {
  let {
    channel: t
  } = e, n = u.Z.getChannel(t.parent_id);
  if (t.isDM()) {
    let e = t.getRecipientId(),
      n = p.default.getUser(e);
    return null == n ? null : (0, r.jsx)("span", {
      className: _.searchResultDMUserName,
      children: f.ZP.getUserTag(n, {
        identifiable: h.Z.enabled && h.Z.hidePersonalInformation ? "never" : "always"
      })
    })
  }
  if (null != n) return (0, r.jsx)("span", {
    className: _.searchResultChannelCategory,
    children: (0, i.F6)(n, p.default, d.Z)
  })
}

function y(e) {
  let {
    channel: t,
    text: n,
    channelContainerClassName: s,
    textContainerClassName: a
  } = e;
  return null == t ? (0, r.jsx)("strong", {
    children: n
  }) : (0, r.jsxs)("div", {
    className: l()(_.resultChannel, s),
    children: [(0, r.jsx)(g, {
      channel: t
    }), (0, r.jsxs)("div", {
      className: a,
      children: [(0, r.jsx)(S, {
        channel: t
      }), (0, r.jsx)(m, {
        channel: t
      })]
    })]
  })
}