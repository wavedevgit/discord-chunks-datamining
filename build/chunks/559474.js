/** Chunk was on web.js **/
/** chunk id: 559474, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  GF: () => g,
  Jn: () => p,
  KE: () => y,
  Kx: () => h,
  Li: () => f,
  Ni: () => m,
  RN: () => d,
  ds: () => R,
  eg: () => w,
  pd: () => v
}), require("./896048.js"), require("./321073.js"), require("./864466.js"), require("./443073.js"), require("./638769.js");
var Chunk64700 = require("./64700.js"),
  Chunk397927 = require("./397927.js"),
  Chunk77350 = require("./77350.js"),
  Chunk940622 = require("./940622.js");

function s(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function l(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      s(e, t, n[t])
    })
  }
  return e
}

function c(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function u(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : c(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
var d = function(e) {
  return e.CATALOG_BANNER_STATIC = "catalog_banner.jpg", e.CATALOG_BANNER_ANIMATED = "catalog_banner_animated.webm", e.CATALOG_BANNER_RIVE = "catalog_banner_rive.riv", e.HERO_BANNER_STATIC = "hero_banner.jpg", e.HERO_BANNER_ANIMATED = "hero_banner_animated.webm", e.HERO_BANNER_RIVE = "hero_rive.riv", e.HERO_LOGO = "hero_logo.png", e.FEATURED_BLOCK = "featured_block.png", e.UPSELL_BANNER = "upsell_banner.jpg", e.UPSELL_BANNER_POPOUT = "upsell_banner_popout.png", e.PDP_BACKGROUND = "pdp_bg.jpg", e.SHOP_BUTTON_BG_HOVER = "shop_button_bg_hover.png", e.SHOP_BUTTON_BG_HOVER_DARK = "shop_button_bg_hover_dark.png", e.SHOP_BUTTON_BG_HOVER_LIGHT = "shop_button_bg_hover_light.png", e.SHOP_BUTTON_BG_RESTING = "shop_button_bg_resting.png", e.SHOP_BUTTON_BG_RESTING_DARK = "shop_button_bg_resting_dark.png", e.SHOP_BUTTON_BG_RESTING_LIGHT = "shop_button_bg_resting_light.png", e.COACHTIP_AVATAR = "coachtip_avatar.png", e.LOGO = "logo.png", e.MOBILE_BANNER = "mobile_banner.jpg", e.MOBILE_BACKGROUND = "mobile_bg.jpg", e.MOBILE_HERO = "mobile_hero.jpg", e
}({});
let f = new Set(Object.values(d));
var p = function(e) {
  return e.PROFILE_EFFECT = "profile_effect", e.AVATAR_DECORATION = "avatar_decoration", e
}({});
let _ = ".DS_Store";
var h = function(e) {
  return e.COLLECTION = "collection", e.AVATAR_DECORATIONS = "avatar_decorations", e.PROFILE_EFFECTS = "profile_effects", e
}({});
let m = e => {
    (0, i.showToast)((0, i.createToast)(e, i.ToastType.FAILURE))
  },
  g = e => {
    (0, i.showToast)((0, i.createToast)(e, i.ToastType.SUCCESS))
  },
  E = (e, t) => {
    let n = new FileReader;
    n.onload = n => {
      null == n.target || "string" != typeof n.target.result ? m("Error uploading file. Try again!") : t(e, n.target.result)
    }, n.readAsDataURL(e)
  },
  y = (e, t, n) => {
    if (0 === e.length) {
      null == n || n("No files found!");
      return
    }
    for (let n of e) E(n, t)
  },
  b = (e, t) => "".concat(e, "/").concat(t),
  O = e => (0, a.tT)(e.type) || (0, a.XB)(e.type) || (0, a.XA)(e.name),
  v = e => f.has(e.name) ? e.name : null,
  A = async e => {
    let t = [];
    if (e.isFile) {
      let n = e,
        r = await new Promise(e => n.file(e));
      r.name !== _ && t.push(r)
    } else if (e.isDirectory) {
      let n = e.createReader(),
        r = await new Promise(e => n.readEntries(e)),
        i = await Promise.all(r.map(e => A(e)));
      t.push(...i.flat())
    }
    return t
  }, I = (e, t, n) => {
    O(t) || t.name.endsWith(".txt") ? (e in n.profileEffectFilesMap || (n.profileEffectFilesMap[e] = []), n.profileEffectFilesMap[e].push(t)) : n.ignoredFilenames.push(b(e, t.name))
  }, S = (e, t, n, r) => {
    if (t.name === _) return;
    let i = b(e, t.name);
    "profile_effects" === n ? I(e, t, r) : O(t) ? "collection" === n || null === n ? f.has(t.name) ? r.collectionFiles.push(t) : r.ignoredFilenames.push(i) : "avatar_decorations" === n ? r.avatarDecorationFiles.push(t) : r.ignoredFilenames.push(i) : r.ignoredFilenames.push(i)
  }, T = async (e, t, n) => {
    let r = e.createReader();
    for (let i of (await new Promise(e => r.readEntries(e))))
      if (i.isFile) {
        let r = i,
          a = await new Promise(e => r.file(e));
        S(e.name, a, t, n)
      } else {
        let e = await A(i);
        n.ignoredFilenames.push(...e.map(e => b(i.name, e.name)))
      }
  }, C = async (e, t) => {
    let n = e.createReader();
    for (let r of (await new Promise(e => n.readEntries(e))))
      if (r.isDirectory) {
        let e = r;
        await T(e, "profile_effects", t)
      } else r.isFile && r.name !== _ && t.ignoredFilenames.push(b(e.name, r.name))
  }, N = async (e, t) => {
    let n = e.createReader();
    for (let e of (await new Promise(e => n.readEntries(e))))
      if (e.isDirectory) {
        let n = e;
        if ("collection" === n.name) await T(n, "collection", t);
        else if ("avatar_decorations" === n.name) await T(n, "avatar_decorations", t);
        else if ("profile_effects" === n.name) await C(n, t);
        else {
          let e = await A(n);
          t.ignoredFilenames.push(...e.map(e => b(n.name, e.name)))
        }
      }
  }, w = async e => {
    let t = {
      collectionFiles: [],
      avatarDecorationFiles: [],
      profileEffectFilesMap: {},
      ignoredFilenames: []
    };
    for (let n of e)
      if (n.isDirectory) {
        let e = n,
          r = e.name;
        "collection" === r || "avatar_decorations" === r ? await T(e, r, t) : "profile_effects" === r ? await C(e, t) : await N(e, t)
      } else if (n.isFile) {
      let e = n;
      S("", await new Promise(t => e.file(t)), null, t)
    }
    return t.collectionFiles.sort((e, t) => e.name.localeCompare(t.name)), t.avatarDecorationFiles.sort((e, t) => e.name.localeCompare(t.name)), t.ignoredFilenames.sort((e, t) => e.localeCompare(t)), t
  }, R = () => {
    let [e, t] = r.useState(() => ({
      collectionFiles: [],
      avatarDecorationFiles: [],
      profileEffectFilesMap: {},
      ignoredFilenames: []
    })), {
      upsertCollectionAsset: n,
      upsertAvatarDecorationAsset: i
    } = (0, o.JE)(), a = r.useCallback(async e => {
      let r = await w(e);
      t(r), (0 !== r.collectionFiles.length || 0 !== r.avatarDecorationFiles.length) && (r.collectionFiles.forEach(e => {
        E(e, e => {
          let t = v(e);
          null != t && n(t, e)
        })
      }), r.avatarDecorationFiles.forEach(e => {
        E(e, e => {
          i(e)
        })
      }))
    }, [n, i]), s = r.useCallback(() => {
      t(e => u(l({}, e), {
        collectionFiles: [],
        avatarDecorationFiles: [],
        profileEffectFilesMap: {}
      }))
    }, []), c = r.useCallback(() => {
      t(e => u(l({}, e), {
        ignoredFilenames: []
      }))
    }, []);
    return {
      ignoredFilenames: e.ignoredFilenames,
      clearAssets: s,
      clearIgnoredFilenames: c,
      processAndUpsertAssets: a
    }
  }