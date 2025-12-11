/** Chunk was on web.js **/
/** chunk id: 579612, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  GQ: () => g,
  MC: () => h,
  P: () => E,
  ZP: () => b
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk933557 = require("./933557.js"),
  Chunk471445 = require("./471445.js"),
  Chunk266076 = require("./266076.jsx"),
  Chunk592125 = require("./592125.js"),
  Chunk699516 = require("./699516.js"),
  Chunk246946 = require("./246946.js"),
  Chunk594174 = require("./594174.js"),
  Chunk51144 = require("./51144.js"),
  Chunk399781 = require("./399781.js");

function h(e) {
  let {
    channel: t,
    className: n,
    avatarSize: i,
    iconSize: a
  } = e;
  if (t.isDM()) {
    let e = t.getRecipientId(),
      n = p.default.getUser(e);
    if (null == n) return null;
    let a = n.getAvatarURL(null, o.ny6[i].size);
    return (0, r.jsx)(o.qEK, {
      "aria-hidden": true,
      className: m.searchResultDMChannelIcon,
      size: i,
      src: a
    })
  }
  if (t.isGroupDM()) return (0, r.jsx)(c.Z, {
    "aria-hidden": true,
    className: m.searchResultGDMChannelIcon,
    channel: t,
    size: i
  });
  let s = (0, l.KS)(t);
  return null == s ? null : (0, r.jsx)(s, {
    className: n,
    color: "currentColor",
    size: a
  })
}

function g(e) {
  let {
    channel: t
  } = e;
  return t.isDM() || t.isGroupDM() ? (0, r.jsx)("span", {
    className: m.searchResultDMChannelName,
    children: (0, s.F6)(t, p.default, d.Z)
  }) : (0, r.jsx)("strong", {
    children: (0, s.F6)(t, p.default, d.Z)
  })
}

function E(e) {
  let {
    channel: t
  } = e, n = u.Z.getChannel(t.parent_id);
  if (t.isDM()) {
    let e = t.getRecipientId(),
      n = p.default.getUser(e);
    return null == n ? null : (0, r.jsx)("span", {
      className: m.searchResultDMUserName,
      children: _.ZP.getUserTag(n, {
        identifiable: f.Z.enabled && f.Z.hidePersonalInformation ? "never" : "always"
      })
    })
  }
  if (null != n) return (0, r.jsx)("span", {
    className: m.searchResultChannelCategory,
    children: (0, s.F6)(n, p.default, d.Z)
  })
}

function b(e) {
  let {
    channel: t,
    text: n,
    channelContainerClassName: i,
    textContainerClassName: s
  } = e;
  return null == t ? (0, r.jsx)("strong", {
    children: n
  }) : (0, r.jsxs)("div", {
    className: a()(m.resultChannel, i),
    children: [(0, r.jsx)(h, {
      channel: t,
      avatarSize: o.EFr.SIZE_20,
      iconSize: "refresh_sm"
    }), (0, r.jsxs)("div", {
      className: s,
      children: [(0, r.jsx)(g, {
        channel: t
      }), (0, r.jsx)(E, {
        channel: t
      })]
    })]
  })
}