/** Chunk was on web (https://canary.discord.comweb.9f0be545d3e34886.js.js) **/
"use strict";
n.d(t, {
  Z: () => _,
  p: () => p
});
var r = n(200651);
n(192379);
var i = n(120356),
  o = n.n(i),
  a = n(112456),
  s = n.n(a),
  l = n(481060),
  c = n(403182),
  u = n(388032),
  d = n(575815);
let f = e => {
    let {
      filename: t
    } = e, i = (0, c.uV)(t), o = n(148660)("./icon-file-".concat(i, ".svg"));
    return (0, r.jsx)("img", {
      className: d.icon,
      src: o,
      alt: u.NW.formatToPlainString(u.t.g6KdFh, {
        fileType: i
      }),
      title: i
    })
  },
  p = e => {
    let {
      filename: t,
      size: n,
      progress: i,
      onCancelUpload: o,
      onClick: a,
      onContextMenu: c
    } = e, p = 100 === i, _ = !p && n > 0;
    return (0, r.jsx)("div", {
      className: d.fileWrapper,
      children: (0, r.jsxs)("div", {
        className: d.file,
        children: [(0, r.jsx)(f, {
          filename: t
        }), (0, r.jsxs)("div", {
          className: d.fileInner,
          children: [(0, r.jsxs)("div", {
            className: d.filenameWrapper,
            children: [(0, r.jsx)(l.P3F, {
              className: d.filename,
              onClick: a,
              onContextMenu: c,
              children: t
            }), _ ? (0, r.jsx)("div", {
              className: d.size,
              children: "— ".concat(s().filesize(n))
            }) : null]
          }), (0, r.jsx)("div", {
            className: d.progressContainer,
            children: p ? u.NW.string(u.t.jfKTen) : (0, r.jsx)(l.Exd, {
              className: d.progress,
              percent: i
            })
          })]
        }), p ? null : (0, r.jsx)(l.P3F, {
          onClick: o,
          children: (0, r.jsx)(l.Dio, {
            size: "md",
            color: "currentColor",
            className: d.cancelButton
          })
        })]
      })
    })
  },
  _ = e => {
    let {
      className: t,
      url: n,
      fileName: i,
      fileSize: a,
      onClick: c,
      onContextMenu: u,
      renderAdjacentContent: p
    } = e;
    return (0, r.jsxs)("div", {
      className: o()(d.fileWrapper, t),
      children: [(0, r.jsxs)("div", {
        className: d.file,
        children: [(0, r.jsx)(f, {
          filename: i
        }), (0, r.jsxs)("div", {
          className: d.fileInner,
          children: [(0, r.jsx)("div", {
            className: d.filenameLinkWrapper,
            children: (0, r.jsx)(l.eee, {
              className: d.fileNameLink,
              href: n,
              onClick: c,
              onContextMenu: u,
              children: i
            })
          }), (0, r.jsx)(l.Text, {
            variant: "text-xs/normal",
            color: "text-muted",
            children: s().filesize(a)
          })]
        })]
      }), null != p && p()]
    })
  }