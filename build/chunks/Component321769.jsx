/** Chunk was on 66548 **/
/** chunk id: 321769, original params: e,l,t (module,exports,require) **/
require.d(exports, {
  E: () => u
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk793030 = require("./793030.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk594174 = require("./594174.js");
let u = {
  title: "TagGroup",
  stories: [{
    name: "TagGroup",
    id: "tag-group",
    component: function(e) {
      let {
        selectionMode: l,
        removeable: t,
        layout: u
      } = e, d = (0, i.e7)([s.default], () => s.default.getCurrentUser()), c = n.useMemo(() => {
        var e;
        return [{
          id: "strength",
          label: "Strength",
          icon: r.z0B
        }, {
          id: "dexterity",
          label: "Dexterity",
          icon: {
            type: "role",
            color: "#ff44aa"
          }
        }, {
          id: "wisdom",
          label: "Wisdom",
          icon: {
            type: "avatar",
            src: null != (e = null == d ? true : d.getAvatarURL(true, 16)) ? e : ""
          }
        }, {
          id: "charisma",
          label: "Charisma"
        }]
      }, [d]), [b, p] = n.useState(c), y = n.useCallback(e => {
        p(b.filter(l => !e.has(l.id)))
      }, [b]), m = n.useCallback(() => {
        p(c)
      }, [c]), f = (0, a.jsx)(o.QSK, {
        label: "Categories",
        selectionMode: l,
        layout: u,
        items: b,
        onRemove: t ? y : true
      }), v = t && (0, a.jsx)(r.Button, {
        disabled: b.length === c.length,
        text: "Reset",
        onClick: m
      });
      return "inline" === u ? (0, a.jsxs)(r.Kqy, {
        gap: 24,
        children: [(0, a.jsx)("div", {
          style: {
            display: "flex",
            gap: 4
          },
          children: f
        }), v]
      }) : (0, a.jsxs)(r.Kqy, {
        gap: 24,
        children: [f, v]
      })
    },
    controls: {
      selectionMode: {
        label: "Selection Mode",
        type: "select",
        defaultValue: "multiple",
        options: [{
          label: "None",
          value: "none"
        }, {
          label: "Single",
          value: "single"
        }, {
          label: "Multiple",
          value: "multiple"
        }]
      },
      removeable: {
        label: "Removeable",
        type: "boolean",
        defaultValue: false
      },
      layout: {
        label: "Layout",
        type: "select",
        defaultValue: "default",
        options: [{
          label: "Default",
          value: "default"
        }, {
          label: "Inline",
          value: "inline"
        }]
      }
    }
  }]
}