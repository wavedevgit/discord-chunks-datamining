/** Chunk was on 9536 **/
/** chunk id: 850864, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => I
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk399606 = require("./399606.js"),
  Chunk780384 = require("./780384.js"),
  Chunk481060 = require("./481060.js"),
  Chunk210887 = require("./210887.js"),
  Chunk430824 = require("./430824.js"),
  Chunk999382 = require("./999382.js"),
  Chunk8426 = require("./8426.js"),
  Chunk969632 = require("./969632.js"),
  Chunk998164 = require("./998164.jsx"),
  Chunk340189 = require("./340189.jsx"),
  Chunk507317 = require("./507317.jsx"),
  Chunk399614 = require("./399614.jsx"),
  Chunk387960 = require("./387960.jsx"),
  Chunk806742 = require("./806742.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk551952 = require("./551952.js"),
  Chunk91716 = require("./91716.js"),
  Chunk470264 = require("./470264.js"),
  Chunk710043 = require("./710043.js"),
  Chunk847950 = require("./847950.js");

function E(e) {
  let {
    guild: t,
    saveOnClose: n
  } = e, [c, d] = i.useState("new"), E = i.useMemo(() => [{
    value: "new",
    name: j.intl.string(j.t["4e5u3l"])
  }, {
    value: "existing",
    name: j.intl.string(j.t.cmkOsU)
  }], []), I = (0, l.e7)([o.Z], () => o.Z.theme);
  i.useEffect(() => () => {
    let e = g.Z.getSettings();
    (0, u.oo)(t.id, e)
  }, [n, t.id]);
  let S = i.useMemo(() => (0, a.ap)(I) ? "existing" === c ? C : N : "existing" === c ? O : y, [c, I]);
  return (0, r.jsxs)("div", {
    className: v.page,
    children: [(0, r.jsxs)("div", {
      className: v.leftColumn,
      children: [(0, r.jsx)(s.Heading, {
        className: v.header,
        variant: "heading-lg/extrabold",
        children: j.intl.string(j.t.tbUZVr)
      }), (0, r.jsx)("div", {
        className: v.descriptionSection,
        children: (0, r.jsx)(s.Text, {
          variant: "text-sm/medium",
          color: "text-default",
          children: j.intl.string(j.t.DvHCq5)
        })
      }), (0, r.jsx)("div", {
        className: v.section,
        children: (0, r.jsx)(x.Z, {
          guildId: t.id
        })
      }), (0, r.jsx)("div", {
        className: v.sectionSeparator
      }), (0, r.jsx)(s.Heading, {
        className: v.header,
        variant: "heading-lg/extrabold",
        children: j.intl.string(j.t["roY/wu"])
      }), (0, r.jsx)("div", {
        className: v.descriptionSection,
        children: (0, r.jsx)(s.Text, {
          variant: "text-sm/medium",
          color: "text-default",
          children: j.intl.format(j.t["/lWYYS"], {})
        })
      }), (0, r.jsx)("div", {
        className: v.section,
        children: (0, r.jsx)(m.Z, {})
      }), (0, r.jsx)(f.Z, {
        guildId: t.id
      }), (0, r.jsx)("div", {
        className: v.sectionSeparator
      }), (0, r.jsx)(s.Heading, {
        className: v.header,
        variant: "heading-lg/extrabold",
        children: j.intl.string(j.t.hEjHyH)
      }), (0, r.jsxs)("div", {
        className: v.descriptionSection,
        children: [(0, r.jsx)(s.Text, {
          variant: "text-sm/medium",
          color: "text-default",
          children: j.intl.string(j.t.YnvKVE)
        }), (0, r.jsxs)("ul", {
          className: v.bulletList,
          children: [(0, r.jsx)("li", {
            children: (0, r.jsx)(s.Text, {
              tag: "span",
              variant: "text-sm/medium",
              color: "text-default",
              children: j.intl.string(j.t["6jEvRU"])
            })
          }), (0, r.jsx)("li", {
            children: (0, r.jsx)(s.Text, {
              tag: "span",
              variant: "text-sm/medium",
              color: "text-default",
              children: j.intl.string(j.t["Fq+UsH"])
            })
          }), (0, r.jsx)("li", {
            children: (0, r.jsx)(s.Text, {
              tag: "span",
              variant: "text-sm/medium",
              color: "text-default",
              children: j.intl.string(j.t.LeEPoH)
            })
          })]
        })]
      }), (0, r.jsxs)("div", {
        className: v.section,
        children: [(0, r.jsx)(h.Z, {
          guildId: t.id
        }), (0, r.jsx)(p.Z, {
          guildId: t.id
        })]
      }), (0, r.jsx)("div", {
        className: v.sectionSeparator
      }), (0, r.jsx)(b.Z, {
        guild: t
      })]
    }), (0, r.jsxs)("div", {
      className: v.rightColumn,
      children: [(0, r.jsx)("div", {
        className: v.centeredSection,
        children: (0, r.jsx)(s.Text, {
          variant: "text-sm/medium",
          color: "text-default",
          children: j.intl.string(j.t.EVV6uZ)
        })
      }), (0, r.jsx)("img", {
        className: v.previewImage,
        src: S,
        alt: j.intl.string(j.t.ST4UOy)
      }), (0, r.jsx)(s.sY7, {
        options: E,
        value: c,
        onChange: e => d(e.value),
        look: "pill"
      })]
    })]
  })
}

function I(e) {
  let {
    saveOnClose: t
  } = e, n = (0, l.e7)([d.Z, c.Z], () => {
    let e = d.Z.getGuildId();
    return c.Z.getGuild(e)
  });
  return null == n ? null : (0, r.jsx)(E, {
    guild: n,
    saveOnClose: t
  })
}