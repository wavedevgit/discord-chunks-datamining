/** Chunk was on 59732 **/
r.d(t, {
  $p: () => a,
  AK: () => d,
  Es: () => c,
  U$: () => s,
  kH: () => u
}), r(315314), r(309749), r(610138), r(216116), r(78328), r(815648), r(47120), r(411104), r(518263), r(970173), r(520712), r(268111), r(941497), r(32026), r(480839), r(744285), r(492257), r(873817), r(610885), r(126298);
var n = r(392711),
  i = r(36793),
  o = r(486324);
async function a(e) {
  let {
    file: t,
    image: n,
    cropDimensions: a,
    cropOriginCoordinates: s,
    maxDimensions: l,
    imageRotation: c = 0
  } = e, {
    sourceX: u,
    sourceY: d,
    sourceWidth: m,
    sourceHeight: g
  } = (0, i.GS)({
    image: n,
    cropDimensions: a,
    cropOriginCoordinates: s,
    maxDimensions: l,
    imageRotation: c
  }), h = await t.arrayBuffer(), p = new Worker(new URL("/assets/" + r.u("86047"), r.b)), E = new Promise((e, t) => {
    p.onmessage = r => {
      let {
        data: n
      } = r;
      if (n.type === o.u.CROP_GIF_COMPLETE) {
        var i;
        e((i = new Blob([n.result]), new Promise(e => {
          let t = new FileReader;
          t.onload = t => {
            var r;
            let n = null === (r = t.target) || void 0 === r ? void 0 : r.result;
            "string" == typeof n ? e(n) : e("")
          }, t.readAsDataURL(i)
        }))), p.terminate()
      } else n.type === o.u.CROP_GIF_ERROR && (t(Error("Error cropping GIF")), p.terminate())
    }
  });
  return p.postMessage({
    type: o.u.CROP_GIF_START,
    gif: new Uint8Array(h),
    x: 0 | u,
    y: 0 | d,
    width: 0 | m,
    height: 0 | g,
    imageRotation: 0 | c
  }), {
    result: E,
    cancelFn: () => p.terminate()
  }
}

function s(e, t, r) {
  return {
    x: (0, n.clamp)(e, r.left, r.right),
    y: (0, n.clamp)(t, r.bottom, r.top)
  }
}

function l(e, t, r, n, i) {
  let a = r,
    s = n,
    l = i ? o.US : o.vJ;
  return (r > l && (a = l, s = l / r * n), r / n < e) ? {
    width: a,
    height: s
  } : {
    width: t / s * a,
    height: t
  }
}

function c(e, t, r, n) {
  switch (e) {
    case o.pC.AVATAR:
    case o.pC.AVATAR_DECORATION:
      return {
        width: t, height: r
      };
    case o.pC.BANNER:
      let i = n ? o.SP : o.qj;
      return l(o.MY, i, t, r, n);
    case o.pC.GUILD_BANNER:
      let a = n ? o.t2 : o.C5;
      return l(o.Ij, a, t, r, n);
    case o.pC.VIDEO_BACKGROUND:
      let s = n ? o.kP : o.PB;
      return l(o.Ff, s, t, r, n);
    case o.pC.SCHEDULED_EVENT_IMAGE:
      let c = n ? o.tv : o.WV;
      return l(o.ut, c, t, r, n);
    case o.pC.HOME_HEADER:
      return l(o.sX, o.SW, t, r, n)
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
    o = t - r.height;
  return 0 !== i && (n.left = -Math.abs(i / 2), n.right = i / 2), 0 !== o && (n.bottom = -Math.abs(o / 2), n.top = o / 2), n
}

function d(e, t, r, n, i) {
  let a = i ? o.US : o.vJ;
  switch (e) {
    case o.pC.AVATAR:
    case o.pC.AVATAR_DECORATION:
      let s = Math.min(t, r);
      return {
        width: s, height: s
      };
    case o.pC.BANNER:
      let l = Math.min(t, a);
      return {
        width: l, height: l * (1 / o.MY)
      };
    case o.pC.GUILD_BANNER:
      let c = Math.min(t, a);
      return {
        width: c, height: Math.min(9 / 16 * c, n)
      };
    case o.pC.VIDEO_BACKGROUND:
      let u = Math.min(t, a);
      return {
        width: u, height: 9 / 16 * u
      };
    case o.pC.SCHEDULED_EVENT_IMAGE:
      let d = Math.min(t, a);
      return {
        width: d, height: .4 * d
      };
    case o.pC.HOME_HEADER:
      let m = Math.min(t, a);
      return {
        width: m, height: m * (1 / o.sX)
      }
  }
}