/** Chunk was on 14093 **/
n.d(t, {
  J: () => a,
  l: () => i
}), n(47120);
var r = n(693824),
  l = n(169040);

function a(e) {
  let t, {
    canvas: n,
    badges: a,
    startPosition: i,
    maxWidth: o
  } = e;
  for (let {
      iconPath: e,
      text: s
    }
    of(n.setFont({
      size: 12,
      family: l.I8,
      weight: l.Ue,
      truncate: r.GX.None
    }), a)) {
    let r = null != t ? t.w + t.x + l.PW : i,
      a = null != t ? t.w + t.x + l.PW + l.NC : i + l.NC;
    n.drawPath(e, {
      x: r,
      y: l.f0
    }, !0, .6), t = n.drawText(s, {
      x: a,
      y: l.m2,
      w: o
    }, !0)
  }
}

function i(e) {
  let {
    canvas: t,
    avatarSrcs: n,
    position: {
      x: l,
      y: a
    },
    avatarImageSize: i
  } = e;
  for (let e = 0; e < n.length; e++) e < n.length - 1 && t.clipRoundedRect({
    x: l + (e + 1) * (i - 8) - 2,
    y: a - 1,
    w: i + 2,
    h: i + 2
  }, i / 2, !0), t.drawRoundedImage(n[e], {
    x: l + e * (i - 8),
    y: a
  }, {
    w: i,
    h: i
  }, 50, {
    fillMode: r.JU.Cover
  }), t.restoreContext()
}