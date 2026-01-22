/** Chunk was on web.js **/
/** chunk id: 939341, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  C4: () => E,
  D8: () => O,
  XN: () => y,
  nO: () => b
}), require("./896048.js"), require("./733351.js");
var Chunk573648 = require("./573648.js"),
  Chunk541806 = require("./541806.js"),
  Chunk141639 = require("./141639.js"),
  Chunk61330 = require("./61330.js"),
  Chunk429913 = require("./429913.js"),
  Chunk585958 = require("./585958.js"),
  Chunk82149 = require("./82149.js"),
  Chunk139675 = require("./139675.js"),
  Chunk486020 = require("./486020.js"),
  Chunk20805 = require("./20805.js"),
  Chunk327098 = require("./327098.js"),
  Chunk652215 = require("./652215.js"),
  Chunk360469 = require("./360469.js"),
  Chunk985018 = require("./985018.jsx");

function g(e) {
  return (0, f.Tq)(e) && e.extra.entries.length > 0 ? {
    src: e.extra.entries[0].media.image_url
  } : (0, f.Lf)(e) ? {
    src: (0, u.uD)(e.extra.application_id, e.extra.media_assets_large_image, h.iu.LARGE),
    alt: e.extra.media_title
  } : (0, f.p6)(e) ? {
    src: e.extra.media.image_url
  } : true
}

function E(e) {
  let t = null == e ? true : e.getIconURL(h.iu.LARGE),
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
    fallbackApplication: s
  } = (0, p.A)(n), {
    largeImage: o,
    smallImage: c
  } = O(i, a), {
    largeImage: u
  } = y(i, null != s ? s : a), {
    coverImageUrl: d
  } = (0, l.n)(null == (t = null != s ? s : a) ? true : t.id), f = g(n);
  return null != o ? {
    largeImage: o,
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
  if ((0, c.Cy)(e)) {
    var o;
    let t = (0, c.UW)(e),
      n = null != t ? d.Ay.getGuildIconURL({
        id: t.guildId,
        icon: null == e || null == (o = e.assets) ? true : o.small_image,
        size: h.iu.SMALL
      }) : true;
    return {
      largeImage: null != n ? {
        src: n
      } : true,
      smallImage: true
    }
  }
  if (null == n && (0, s.A)(e)) return {
    largeImage: {
      src: r.A.get(_.fg2.XBOX).icon.customPNG,
      alt: m.intl.string(m.t.Nfvo72)
    },
    smallImage: true
  };
  if (null == n && null == i && (0, a.A)(e)) return {
    largeImage: {
      src: r.A.get(_.fg2.PLAYSTATION).icon.lightPNG,
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
  var n, r, a, s, l, c, d, f;
  let p = (0, o.h)(null == e ? true : e.application_id);
  if (null == e) return {
    largeImage: true,
    smallImage: true
  };
  let _ = null == e || null == (n = e.assets) ? true : n.large_image,
    m = null != _ ? {
      src: (0, u.uD)(e.application_id, _, [h.iu.LARGE, h.iu.LARGE]),
      text: null == (a = e.assets) || null == (r = a.large_text) ? true : r.trim(),
      url: null == (s = e.assets) ? true : s.large_url
    } : true,
    g = (0, i.A)(e) || null == e || null == (l = e.assets) ? true : l.small_image,
    b = null != g ? {
      src: (0, u.uD)(e.application_id, g, [h.iu.LARGE, h.iu.LARGE]),
      text: null == (d = e.assets) || null == (c = d.small_text) ? true : c.trim(),
      url: null == (f = e.assets) ? true : f.small_url
    } : true;
  return {
    largeImage: null != m ? m : E(null != t ? t : p),
    smallImage: b
  }
}