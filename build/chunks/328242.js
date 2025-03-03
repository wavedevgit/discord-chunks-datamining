/** Chunk was on 46746 **/
n.d(t, {
  Z: () => u
}), n(47120);
var r = n(200651);
n(192379);
var l = n(268146),
  i = n(481060),
  s = n(615161),
  o = n(388032),
  a = n(154693);

function c(e) {
  let {
    source: t
  } = e;
  return t.id.startsWith(l.vA.SCREEN) ? (0, r.jsx)(i.pzj, {
    size: "xs"
  }) : t.id.startsWith(l.vA.WINDOW) ? null != t.icon && "" !== t.icon ? (0, r.jsx)("img", {
    src: t.icon,
    className: a.sourceIcon,
    alt: ""
  }) : (0, r.jsx)(i.GON, {
    size: "xs"
  }) : (0, r.jsx)(i.Odl, {
    size: "xs"
  })
}

function d(e) {
  let {
    source: t,
    onClick: n
  } = e, {
    url: l,
    name: s
  } = t;
  return (0, r.jsxs)(i.P3F, {
    onClick: () => n(t),
    className: a.source,
    children: [(0, r.jsx)("div", {
      className: a.sourcePreviewContainer,
      children: (0, r.jsxs)("div", {
        className: a.sourcePreview,
        children: [(0, r.jsx)("img", {
          src: l,
          className: a.sourcePreviewImage,
          alt: ""
        }), (0, r.jsx)("div", {
          className: a.sourceOverlay,
          children: (0, r.jsx)("div", {
            className: a.sourceOverlayCTA,
            children: (0, r.jsx)(i.Text, {
              variant: "text-sm/medium",
              color: "button-filled-white-text",
              children: o.NW.string(o.t.z7WGho)
            })
          })
        })]
      })
    }), (0, r.jsxs)("div", {
      className: a.sourceNameContainer,
      children: [(0, r.jsx)(c, {
        source: t
      }), (0, r.jsx)(i.Text, {
        variant: "text-sm/medium",
        className: a.sourceName,
        children: s
      })]
    })]
  })
}

function u(e) {
  var t;
  let {
    onClick: n
  } = e, [{
    windowSources: o,
    deviceSources: c,
    screenSources: u,
    sourceType: f,
    fetchingSources: h
  }] = (0, s.E_)();
  return h ? (0, r.jsx)("div", {
    className: a.loading,
    children: (0, r.jsx)(i.$jN, {})
  }) : (t = f === l.vA.WINDOW ? o : f === l.vA.SCREEN ? u : c, (0, r.jsx)("div", {
    className: a.root,
    children: t.map(e => (0, r.jsx)(d, {
      onClick: n,
      source: e
    }, e.id))
  }))
}