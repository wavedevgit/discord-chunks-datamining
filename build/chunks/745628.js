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
  A = n(388032),
  c = n(154662);
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
    className: c.slideContent,
    children: [(0, r.jsx)(a.X6q, {
      variant: "heading-xxl/medium",
      className: c.title,
      children: A.NW.string(A.t.pdVsBA)
    }), (0, r.jsx)(a.Text, {
      variant: "text-md/normal",
      color: "header-secondary",
      className: c.subtitle,
      children: A.NW.string(A.t.E1L1o6)
    }), (null == f ? void 0 : f.description) != null && (0, r.jsx)(a.Text, {
      variant: "text-sm/normal",
      color: "status-danger",
      className: c.errorText,
      children: f.description
    }), (0, r.jsxs)("div", {
      className: c.content,
      children: [(0, r.jsxs)("div", {
        className: c.mainPanelContainer,
        children: [(0, r.jsx)("div", {
          className: c.maxWidthContainer,
          children: (0, r.jsx)(a.Kx8, {
            className: c.input,
            maxLength: o.Us,
            onChange: e => u({
              description: e
            }),
            value: null != p ? p : "",
            rows: 5,
            autoFocus: !0,
            autosize: !0,
            placeholder: A.NW.string(A.t["/pfXKi"])
          })
        }), (0, r.jsx)(a.Text, {
          variant: "text-sm/medium",
          color: "header-secondary",
          className: c.optionalTag,
          children: A.NW.string(A.t["vWEL6+"])
        }), (0, r.jsx)(a.Text, {
          variant: "text-md/normal",
          color: "header-secondary",
          className: c.title,
          children: A.NW.string(A.t["2g9zfX"])
        }), (null == f ? void 0 : f.wildcardDescriptors) != null && (0, r.jsx)(a.Text, {
          variant: "text-sm/normal",
          color: "status-danger",
          className: c.errorText,
          children: f.wildcardDescriptors
        }), (0, r.jsxs)("div", {
          className: c.wildcardRow,
          children: [(0, r.jsx)(a.oil, {
            inputClassName: s()(c.input, c.wildcardInput),
            value: null !== (t = m[0]) && void 0 !== t ? t : "",
            onChange: e => h(e, 0),
            maxLength: o.TY,
            placeholder: o.LK["0"]
          }), (0, r.jsx)(a.oil, {
            inputClassName: s()(c.input, c.wildcardInput),
            value: null !== (n = m[1]) && void 0 !== n ? n : "",
            onChange: e => h(e, 1),
            maxLength: o.TY,
            placeholder: o.LK["1"]
          }), (0, r.jsx)(a.oil, {
            inputClassName: s()(c.input, c.wildcardInput),
            value: null !== (i = m[2]) && void 0 !== i ? i : "",
            onChange: e => h(e, 2),
            maxLength: o.TY,
            placeholder: o.LK["2"]
          })]
        })]
      }), (0, r.jsx)("div", {
        className: c.fixedWidthSidebar,
        children: (0, r.jsx)(l.Z, {
          guildId: d,
          progress: g,
          maskTraits: !0
        })
      })]
    })]
  })
}