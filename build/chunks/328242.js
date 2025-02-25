/** Chunk was on 79477 **/
n.d(t, {
  Z: () => d
}), n(47120);
var l = n(200651);
n(192379);
var r = n(268146),
  s = n(481060),
  i = n(615161),
  a = n(388032),
  o = n(430817);

function c(e) {
  let {
    source: t
  } = e;
  return t.id.startsWith(r.vA.SCREEN) ? (0, l.jsx)(s.pzj, {
    size: "xs"
  }) : t.id.startsWith(r.vA.WINDOW) ? null != t.icon && "" !== t.icon ? (0, l.jsx)("img", {
    src: t.icon,
    className: o.sourceIcon,
    alt: ""
  }) : (0, l.jsx)(s.GON, {
    size: "xs"
  }) : (0, l.jsx)(s.Odl, {
    size: "xs"
  })
}

function u(e) {
  let {
    source: t,
    onClick: n
  } = e, {
    url: r,
    name: i
  } = t;
  return (0, l.jsxs)(s.P3F, {
    onClick: () => n(t),
    className: o.source,
    children: [(0, l.jsx)("div", {
      className: o.sourcePreviewContainer,
      children: (0, l.jsxs)("div", {
        className: o.sourcePreview,
        children: [(0, l.jsx)("img", {
          src: r,
          className: o.sourcePreviewImage,
          alt: ""
        }), (0, l.jsx)("div", {
          className: o.sourceOverlay,
          children: (0, l.jsx)("div", {
            className: o.sourceOverlayCTA,
            children: (0, l.jsx)(s.Text, {
              variant: "text-sm/medium",
              color: "button-filled-white-text",
              children: a.NW.string(a.t.z7WGho)
            })
          })
        })]
      })
    }), (0, l.jsxs)("div", {
      className: o.sourceNameContainer,
      children: [(0, l.jsx)(c, {
        source: t
      }), (0, l.jsx)(s.Text, {
        variant: "text-sm/medium",
        className: o.sourceName,
        children: i
      })]
    })]
  })
}

function d(e) {
  var t;
  let {
    onClick: n
  } = e, [{
    windowSources: a,
    deviceSources: c,
    screenSources: d,
    sourceType: m,
    fetchingSources: g
  }, h] = (0, i.E_)();

  function x(e) {
    n(e), h({
      type: "set_source",
      source: e
    })
  }
  return g ? (0, l.jsx)("div", {
    className: o.loading,
    children: (0, l.jsx)(s.$jN, {})
  }) : (t = m === r.vA.WINDOW ? a : m === r.vA.SCREEN ? d : c, (0, l.jsx)("div", {
    className: o.root,
    children: t.map(e => (0, l.jsx)(u, {
      onClick: x,
      source: e
    }, e.id))
  }))
}