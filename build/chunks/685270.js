/** Chunk was on 14093 **/
n.d(t, {
  B: () => u
}), n(653041), n(266796);
var r = n(55e3),
  l = n(693824),
  a = n(690725),
  i = n(737583),
  o = n(169040);
let s = (e, t, n) => (function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = null != arguments[t] ? arguments[t] : {},
        r = Object.keys(n);
      "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
        return Object.getOwnPropertyDescriptor(n, e).enumerable
      }))), r.forEach(function(t) {
        var r;
        r = n[t], t in e ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : e[t] = r
      })
    }
    return e
  })({
    AvatarImage: e
  }, null != t && {
    MediaImage: t
  }, null != n && {
    ApplicationImage: n
  }),
  c = (e, t) => {
    let n = [{
      iconPath: o.i6,
      text: e
    }];
    return null != t && n.push({
      iconPath: o.fj,
      text: t
    }), n
  },
  u = async e => {
    let {
      mediaImageSrc: t,
      entry: n,
      avatarSrc: u,
      description: d,
      timestamp: m,
      episodeDescription: p,
      colors: h,
      channelId: f
    } = e, g = n.extra.media_title, v = s(u, t);
    return await (0, a.f)({
      assetsToLoad: v,
      drawImage: e => {
        let t = h.map((e, t) => ({
          color: e,
          stop: t
        }));
        e.setSize({
          w: o.nx,
          h: o.bg
        }, 4), e.drawRoundedGradientRect(t, {
          x: 0,
          y: o.bg
        }, {
          x: o.nx,
          y: 0
        }, {
          x: 0,
          y: 0,
          h: o.bg,
          w: o.nx
        }, 8), e.setColor("white");
        let n = e.drawRoundedImage("MediaImage", {
          x: o.sB,
          y: o.sB
        }, {
          w: o.Pu,
          h: o.Pu
        }, 8, {
          fillMode: l.JU.Contain
        });
        n === l.vP.Failure && (n = e.drawRoundedImage("ApplicationImage", {
          x: o.sB,
          y: o.sB
        }, {
          w: o.Pu,
          h: o.Pu
        }, 8)), n === l.vP.Failure && e.drawPath(r.Cv, {
          x: o.sB,
          y: o.sB
        }, !0, 2 + 2 / 3), e.drawRoundedImage("AvatarImage", {
          x: o.Iq,
          y: o.sB
        }, {
          w: o.$S,
          h: o.$S
        }, 50), e.setFont({
          size: 16,
          family: o.I8,
          weight: o.Ue,
          truncate: l.GX.Wrap
        }), e.drawText(d, {
          x: o.Iq,
          y: 64,
          h: 32,
          w: o.kC
        }, !0);
        let a = c(m, p);
        (0, i.J)({
          canvas: e,
          badges: a,
          startPosition: o.Iq,
          maxWidth: o.kC
        })
      },
      exportConfigs: {
        format: l.kH.CloudUpload,
        quality: 1,
        fileName: "user-reacting-to-".concat(g, ".png").toLowerCase(),
        fileType: "png",
        channelId: f
      }
    })
  }