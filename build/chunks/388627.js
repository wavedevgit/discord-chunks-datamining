/** Chunk was on web.js **/
"use strict";
n.d(t, {
  E6: () => S,
  HP: () => O,
  II: () => T,
  fK: () => b,
  pL: () => I
}), n(411104), n(47120);
var r = n(200651);
n(192379);
var i = n(608787),
  o = n(442837),
  a = n(902704),
  s = n(765250),
  l = n(615287),
  c = n(214629),
  u = n(317381),
  d = n(812206);
n(358221);
var f = n(594190);
n(569545), n(522474);
var _ = n(788983);
n(199902), n(314897);
var p = n(355863),
  h = n(293273);
n(944486), n(808506);
var g = n(145597),
  m = n(32300),
  E = n(371651);
n(340101);
var v = n(501787);
async function b() {
  let e = {
      outOfProcessOverlay: !0,
      focusable: !1
    },
    t = (0, m.Rb)("openOverlayPopout").overlayV3UI,
    o = E.default.getForcedRenderMode(),
    a = (0, m.b4)("openOverlayPopout");
  if (!(t || a) && o === l.R5.UNSET) return;
  let c = o === l.R5.OUT_OF_PROCESS_V3 || o === l.R5.OUT_OF_PROCESS_V3_LIMITED_INTERACTION,
    u = o === l.R5.OUT_OF_PROCESS_V2,
    d = e => null;
  if (t && !u || c) {
    let e = (0, i.Un)({
      createPromise: () => Promise.all([n.e("50506"), n.e("30371"), n.e("25292"), n.e("90508"), n.e("13351"), n.e("70045"), n.e("99839"), n.e("70205"), n.e("93382"), n.e("12416"), n.e("61195"), n.e("92922"), n.e("50751"), n.e("1093"), n.e("45432"), n.e("13368")]).then(n.bind(n, 989373)),
      webpackId: 989373,
      name: "AppOverlay"
    });
    d = t => (0, r.jsx)(e, {
      withTitleBar: !1,
      windowKey: t
    }), (0, s.te)(v.OVERLAY_V3_LAYOUT_ID, p.Z.getDefaultLayout(v.OVERLAY_V3_LAYOUT_ID, 1), 1)
  } else if (a || u) {
    let e = (0, i.Un)({
      createPromise: () => Promise.all([n.e("50506"), n.e("68880"), n.e("48835"), n.e("99152"), n.e("30371"), n.e("28098"), n.e("25292"), n.e("22878"), n.e("90508"), n.e("13351"), n.e("95477"), n.e("11212"), n.e("66711"), n.e("97349"), n.e("55186"), n.e("53937"), n.e("6380"), n.e("46097"), n.e("84335"), n.e("8739"), n.e("18543"), n.e("58059"), n.e("28467"), n.e("18895"), n.e("70045"), n.e("30243"), n.e("99393"), n.e("68241"), n.e("80284"), n.e("85574"), n.e("8655"), n.e("30806"), n.e("99839"), n.e("60691"), n.e("38902"), n.e("42743"), n.e("49049"), n.e("45847"), n.e("70205"), n.e("17049"), n.e("26593"), n.e("7590"), n.e("93382"), n.e("93375"), n.e("64679"), n.e("69057"), n.e("78447"), n.e("98254"), n.e("22356"), n.e("57738"), n.e("35755"), n.e("14093"), n.e("12416"), n.e("94989"), n.e("37220"), n.e("17024"), n.e("82158"), n.e("91315"), n.e("88119"), n.e("61195"), n.e("92922"), n.e("78553"), n.e("86029"), n.e("50751"), n.e("1093"), n.e("45260"), n.e("48799"), n.e("45432"), n.e("54030")]).then(n.bind(n, 969383)),
      webpackId: 969383,
      name: "AppOverlayV2Tech"
    });
    d = t => (0, r.jsx)(e, {
      withTitleBar: !1,
      windowKey: t
    }), (0, s.te)(g.OVERLAY_LAYOUT_ID, p.Z.getDefaultLayout(g.OVERLAY_LAYOUT_ID, 0), 0)
  } else throw Error("OverlayV3Utils: No overlay rendering mode found");
  await _.bA(v.$J, d, e)
}

function y() {
  let [e = PopoutWindowStore] = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [PopoutWindowStore];
  return e.getWindowVisible(OVERLAY_V3_KEY)
}

function O(e, t) {
  if (e === t) return !0;
  if (e.length !== t.length) return !1;
  for (let n = 0; n < e.length; n++)
    if (e[n].widget !== t[n].widget) return !1;
  return !0
}

function S(e, t) {
  if (e === t) return !0;
  if (e.length !== t.length) return !1;
  for (let n = 0; n < e.length; n++)
    if (e[n].index !== t[n].index || e[n].notification !== t[n].notification || e[n].locked !== t[n].locked) return !1;
  return !0
}

function I() {
  var e, t;
  let n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : f.ZP,
    r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : h.Z,
    i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : u.ZP,
    o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : d.Z,
    a = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : (0, c.e1)(),
    s = i.getCurrentEmbeddedActivity(),
    l = null == s ? void 0 : s.applicationId,
    _ = null == l ? void 0 : o.getApplication(l);
  if (null != s && null != _ && a) return {
    id: s.applicationId,
    altId: void 0,
    name: _.name
  };
  let p = (0, g.getPID)(),
    m = n.getGameForPID(p),
    E = r.getActivityForPID(p);
  return (null == m || null == m.id || null == m.name) && (null == E || null == E.application_id) ? void 0 : {
    id: null !== (e = null == m ? void 0 : m.id) && void 0 !== e ? e : null == E ? void 0 : E.application_id,
    altId: null == E ? void 0 : E.application_id,
    name: null !== (t = null == m ? void 0 : m.name) && void 0 !== t ? t : null == E ? void 0 : E.name
  }
}

function T() {
  let e = (0, c.PR)();
  return (0, o.e7)([f.ZP, h.Z, u.ZP, d.Z], () => I(f.ZP, h.Z, u.ZP, d.Z, e), [e], a.Z)
}