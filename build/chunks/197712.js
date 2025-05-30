/** Chunk was on 59732 **/
r.d(t, {
  $p: () => o,
  AK: () => d,
  Es: () => c,
  U$: () => s,
  kH: () => u
}), r(190126), r(368063), r(65234), r(111804), r(490233), r(97749), r(388685), r(415506), r(410992), r(227481), r(730884), r(20464), r(341884), r(364341), r(629680), r(505025), r(918970), r(121784), r(644351), r(146733);
var n = r(392711),
  i = r(36793),
  a = r(486324);
async function o(e) {
  let {
    file: t,
    image: n,
    cropDimensions: o,
    cropOriginCoordinates: s,
    maxDimensions: l,
    imageRotation: c = 0,
    resizeWidth: u = null,
    resizeHeight: d = null
  } = e, {
    sourceX: m,
    sourceY: g,
    sourceWidth: h,
    sourceHeight: p
  } = (0, i.GS)({
    image: n,
    cropDimensions: o,
    cropOriginCoordinates: s,
    maxDimensions: l,
    imageRotation: c
  }), E = await t.arrayBuffer(), C = new Worker(new URL("/assets/" + r.u("86047"), r.b)), f = new Promise((e, t) => {
    C.onmessage = r => {
      let {
        data: n
      } = r;
      if (n.type === a.u.CROP_GIF_COMPLETE) {
        var i;
        e((i = new Blob([n.result]), new Promise(e => {
          let t = new FileReader;
          t.onload = t => {
            var r;
            let n = null == (r = t.target) ? void 0 : r.result;
            "string" == typeof n ? e(n) : e("")
          }, t.readAsDataURL(i)
        }))), C.terminate()
      } else n.type === a.u.CROP_GIF_ERROR && (t(Error("Error cropping GIF", {
        cause: null == n ? void 0 : n.error
      })), C.terminate())
    }
  });
  return C.postMessage({
    type: a.u.CROP_GIF_START,
    gif: new Uint8Array(E),
    x: 0 | m,
    y: 0 | g,
    width: 0 | h,
    height: 0 | p,
    imageRotation: 0 | c,
    resizeWidth: u,
    resizeHeight: d
  }), {
    result: f,
    cancelFn: () => C.terminate()
  }
}

function s(e, t, r) {
  return {
    x: (0, n.clamp)(e, r.left, r.right),
    y: (0, n.clamp)(t, r.bottom, r.top)
  }
}

function l(e, t, r, n, i) {
  let o = r,
    s = n,
    l = i ? a.US : a.vJ;
  return (r > l && (o = l, s = l / r * n), r / n < e) ? {
    width: o,
    height: s
  } : {
    width: t / s * o,
    height: t
  }
}

function c(e, t, r, n) {
  switch (e) {
    case a.pC.AVATAR:
    case a.pC.AVATAR_DECORATION:
    case a.pC.GUILD_ICON:
      return {
        width: t, height: r
      };
    case a.pC.BANNER:
      let i = n ? a.SP : a.qj;
      return l(a.MY, i, t, r, n);
    case a.pC.GUILD_BANNER:
      let o = n ? a.t2 : a.C5;
      return l(a.Ij, o, t, r, n);
    case a.pC.VIDEO_BACKGROUND:
      let s = n ? a.kP : a.PB;
      return l(a.Ff, s, t, r, n);
    case a.pC.SCHEDULED_EVENT_IMAGE:
      let c = n ? a.tv : a.WV;
      return l(a.ut, c, t, r, n);
    case a.pC.HOME_HEADER:
      return l(a.sX, a.SW, t, r, n)
  }
}

function u(e, t, r) {
  let n = {
      top: 0,
      bottom: 0,
      left: 0,
      right: 0
    },
    i = e - r.width,
    a = t - r.height;
  return 0 !== i && (n.left = -Math.abs(i / 2), n.right = i / 2), 0 !== a && (n.bottom = -Math.abs(a / 2), n.top = a / 2), n
}

function d(e, t, r, n, i) {
  let o = i ? a.US : a.vJ;
  switch (e) {
    case a.pC.AVATAR:
    case a.pC.AVATAR_DECORATION:
    case a.pC.GUILD_ICON:
      let s = Math.min(t, r);
      return {
        width: s, height: s
      };
    case a.pC.BANNER:
      let l = Math.min(t, o);
      return {
        width: l, height: l * (1 / a.MY)
      };
    case a.pC.GUILD_BANNER:
      let c = Math.min(t, o);
      return {
        width: c, height: Math.min(9 / 16 * c, n)
      };
    case a.pC.VIDEO_BACKGROUND:
      let u = Math.min(t, o);
      return {
        width: u, height: 9 / 16 * u
      };
    case a.pC.SCHEDULED_EVENT_IMAGE:
      let d = Math.min(t, o);
      return {
        width: d, height: .4 * d
      };
    case a.pC.HOME_HEADER:
      let m = Math.min(t, o);
      return {
        width: m, height: m * (1 / a.sX)
      }
  }
}