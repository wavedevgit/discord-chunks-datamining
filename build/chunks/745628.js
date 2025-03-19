/** Chunk was on 10396 **/
"use strict";
n.d(t, {
  Z: () => d
}), n(266796), n(47120);
var r = n(200651);
n(192379);
var i = n(120356),
  s = n.n(i),
  a = n(481060),
  l = n(18100),
  o = n(308083),
  c = n(388032),
  A = n(154662);
let d = e => {
  var t, n, i;
  let {
    guildId: d,
    handleUpdate: u,
    progress: g,
    errors: f
  } = e, {
    wildcardDescriptors: m,
    description: p
  } = g, h = (e, t) => {
    let n = [...m];
    n[t] = e, u({
      wildcardDescriptors: n
    })
  };
  return (0, r.jsxs)("div", {
    className: A.slideContent,
    children: [(0, r.jsx)(a.X6q, {
      variant: "heading-xxl/medium",
      className: A.title,
      children: c.NW.string(c.t.pdVsBA)
    }), (0, r.jsx)(a.Text, {
      variant: "text-md/normal",
      color: "header-secondary",
      className: A.subtitle,
      children: c.NW.string(c.t.E1L1o6)
    }), (null == f ? void 0 : f.description) != null && (0, r.jsx)(a.Text, {
      variant: "text-sm/normal",
      color: "status-danger",
      className: A.errorText,
      children: f.description
    }), (0, r.jsxs)("div", {
      className: A.content,
      children: [(0, r.jsxs)("div", {
        className: A.mainPanelContainer,
        children: [(0, r.jsx)("div", {
          className: A.maxWidthContainer,
          children: (0, r.jsx)(a.Kx8, {
            className: A.input,
            maxLength: o.Us,
            onChange: e => u({
              description: e
            }),
            value: null != p ? p : "",
            rows: 5,
            autoFocus: !0,
            autosize: !0,
            placeholder: c.NW.string(c.t["/pfXKi"])
          })
        }), (0, r.jsx)(a.Text, {
          variant: "text-sm/medium",
          color: "header-secondary",
          className: A.optionalTag,
          children: c.NW.string(c.t["vWEL6+"])
        }), (0, r.jsx)(a.Text, {
          variant: "text-md/normal",
          color: "header-secondary",
          className: A.title,
          children: c.NW.string(c.t["2g9zfX"])
        }), (null == f ? void 0 : f.wildcardDescriptors) != null && (0, r.jsx)(a.Text, {
          variant: "text-sm/normal",
          color: "status-danger",
          className: A.errorText,
          children: f.wildcardDescriptors
        }), (0, r.jsxs)("div", {
          className: A.wildcardRow,
          children: [(0, r.jsx)(a.oil, {
            inputClassName: s()(A.input, A.wildcardInput),
            value: null !== (t = m[0]) && void 0 !== t ? t : "",
            onChange: e => h(e, 0),
            maxLength: o.TY,
            placeholder: o.LK["0"]
          }), (0, r.jsx)(a.oil, {
            inputClassName: s()(A.input, A.wildcardInput),
            value: null !== (n = m[1]) && void 0 !== n ? n : "",
            onChange: e => h(e, 1),
            maxLength: o.TY,
            placeholder: o.LK["1"]
          }), (0, r.jsx)(a.oil, {
            inputClassName: s()(A.input, A.wildcardInput),
            value: null !== (i = m[2]) && void 0 !== i ? i : "",
            onChange: e => h(e, 2),
            maxLength: o.TY,
            placeholder: o.LK["2"]
          })]
        })]
      }), (0, r.jsx)("div", {
        className: A.fixedWidthSidebar,
        children: (0, r.jsx)(l.Z, {
          guildId: d,
          progress: g,
          maskTraits: !0
        })
      })]
    })]
  })
}