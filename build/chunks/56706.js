/** Chunk was on 93886 **/
n.d(t, {
  Z: () => d
}), n(47120);
var r = n(200651),
  a = n(192379),
  i = n(481060),
  l = n(570140),
  o = n(358820),
  s = n(710662),
  c = n(336614);

function d() {
  let [e, t] = a.useState(30), n = () => {
    l.Z.dispatch({
      type: "VOICE_FILTER_DEV_TOOLS_SET_UPDATE_TIME",
      timeInSeconds: e
    })
  };
  return (0, r.jsx)(i.zJl, {
    className: s.panel,
    children: (0, r.jsxs)("div", {
      className: c.panelInner,
      children: [(0, r.jsx)(i.Text, {
        className: c.panelHeader,
        variant: "text-lg/bold",
        children: "Voice Filters"
      }), (0, r.jsxs)("div", {
        className: c.panelRow,
        children: [(0, r.jsx)(i.Text, {
          variant: "text-md/normal",
          children: "Set number of seconds remaining in countdown"
        }), (0, r.jsx)(i.oil, {
          defaultValue: 30,
          onChange: e => {
            t(parseInt(e))
          }
        }), (0, r.jsx)(i.zxk, {
          size: i.zxk.Sizes.SMALL,
          onClick: () => n(),
          children: "Set"
        })]
      }), (0, r.jsxs)("div", {
        className: c.panelRow,
        children: [(0, r.jsx)(i.Text, {
          variant: "text-md/normal",
          children: "Reset to API values"
        }), (0, r.jsx)(i.zxk, {
          size: i.zxk.Sizes.SMALL,
          onClick: () => {
            (0, o.wV)()
          },
          children: "Reset"
        })]
      })]
    })
  })
}