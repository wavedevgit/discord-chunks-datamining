/** Chunk was on web.js **/
/** chunk id: 379357, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  FO: () => y,
  T7: () => E,
  YC: () => O,
  rv: () => b
}), require("./388685.js"), require("./781311.js");
var Chunk726542 = require("./726542.js"),
  Chunk394821 = require("./394821.js"),
  Chunk834353 = require("./834353.js"),
  Chunk802856 = require("./802856.js"),
  Chunk835473 = require("./835473.js"),
  Chunk210753 = require("./210753.js"),
  Chunk750154 = require("./750154.js"),
  Chunk81063 = require("./81063.js"),
  Chunk768581 = require("./768581.js"),
  Chunk26033 = require("./26033.js"),
  Chunk593294 = require("./593294.js"),
  Chunk981631 = require("./981631.js"),
  Chunk701488 = require("./701488.js"),
  Chunk388032 = require("./388032.jsx");

function g(e) {
  return (0, f.dU)(e) && e.extra.entries.length > 0 ? {
    src: e.extra.entries[0].media.image_url
  } : (0, f.y0)(e) ? {
    src: (0, u.xF)(e.extra.application_id, e.extra.media_assets_large_image, h.Si.LARGE),
    alt: e.extra.media_title
  } : (0, f.KF)(e) ? {
    src: e.extra.media.image_url
  } : true
}

function E(e) {
  let t = null == e ? true : e.getIconURL(h.Si.LARGE),
    n = null == e ? true : e.name;
  if (null != t) return {
    src: t,
    alt: null == n ? m.intl.string(m.t["2B/phM"]) : m.intl.formatToPlainString(m.t.tiKyYg, {
      applicationName: n
    })
  }
}

function b(e) {
  var t;
  let {
    entry: n,
    showCoverImage: r = true
  } = e, {
    activity: i,
    activityApplication: a,
    fallbackApplication: o
  } = (0, p.Z)(n), {
    largeImage: s,
    smallImage: c
  } = O(i, a), {
    largeImage: u
  } = y(i, null != o ? o : a), {
    coverImageUrl: d
  } = (0, l.$)(null == (t = null != o ? o : a) ? true : t.id), f = g(n);
  return null != s ? {
    largeImage: s,
    smallImage: c
  } : null != f ? {
    largeImage: f,
    smallImage: true
  } : null != d && r ? {
    largeImage: {
      src: d
    },
    smallImage: true
  } : {
    largeImage: u,
    smallImage: true
  }
}

function y(e, t) {
  let {
    largeImage: n,
    smallImage: i
  } = O(e, t);
  if (null != n) return {
    largeImage: n,
    smallImage: i
  };
  if ((0, c.dS)(e)) {
    var s;
    let t = (0, c.rq)(e),
      n = null != t ? d.ZP.getGuildIconURL({
        id: t.guildId,
        icon: null == e || null == (s = e.assets) ? true : s.small_image,
        size: h.Si.SMALL
      }) : true;
    return {
      largeImage: null != n ? {
        src: n
      } : true,
      smallImage: true
    }
  }
  if (null == n && (0, o.Z)(e)) return {
    largeImage: {
      src: r.Z.get(_.ABu.XBOX).icon.customPNG,
      alt: m.intl.string(m.t.Nfvo72)
    },
    smallImage: true
  };
  if (null == n && null == i && (0, a.Z)(e)) return {
    largeImage: {
      src: r.Z.get(_.ABu.PLAYSTATION).icon.lightPNG,
      alt: m.intl.string(m.t.fFl4jo)
    },
    smallImage: true
  };
  let l = E(t);
  return null != l ? {
    largeImage: l,
    smallImage: i
  } : {
    largeImage: i,
    smallImage: true
  }
}

function O(e, t) {
  var n, r, a, o, l, c, d, f;
  let p = (0, s.q)(null == e ? true : e.application_id);
  if (null == e) return {
    largeImage: true,
    smallImage: true
  };
  let _ = null == e || null == (n = e.assets) ? true : n.large_image,
    m = null != _ ? {
      src: (0, u.xF)(e.application_id, _, [h.Si.LARGE, h.Si.LARGE]),
      text: null == (a = e.assets) || null == (r = a.large_text) ? true : r.trim(),
      url: null == (o = e.assets) ? true : o.large_url
    } : true,
    g = (0, i.Z)(e) || null == e || null == (l = e.assets) ? true : l.small_image,
    b = null != g ? {
      src: (0, u.xF)(e.application_id, g, [h.Si.LARGE, h.Si.LARGE]),
      text: null == (d = e.assets) || null == (c = d.small_text) ? true : c.trim(),
      url: null == (f = e.assets) ? true : f.small_url
    } : true;
  return {
    largeImage: null != m ? m : E(null != t ? t : p),
    smallImage: b
  }
}