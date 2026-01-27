/** Chunk was on web.js **/
/** chunk id: 566193, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  f: () => c
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk158954 = require("./158954.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk287809 = require("./287809.js");
let c = {
  title: "TagGroup",
  stories: [{
    name: "TagGroup",
    id: "tag-group",
    component: function(e) {
      let {
        selectionMode: t,
        removeable: n,
        layout: c
      } = e, u = (0, o.bG)([l.default], () => l.default.getCurrentUser()), d = i.useMemo(() => {
        var e;
        return [{
          id: "strength",
          label: "Strength",
          icon: s.rYc
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
            src: null != (e = null == u ? true : u.getAvatarURL(true, 16)) ? e : ""
          }
        }, {
          id: "charisma",
          label: "Charisma"
        }]
      }, [u]), [f, p] = i.useState(d), _ = i.useCallback(e => {
        p(f.filter(t => !e.has(t.id)))
      }, [f]), h = i.useCallback(() => {
        p(d)
      }, [d]), m = (0, r.jsx)(a.CR_, {
        label: "Categories",
        selectionMode: t,
        layout: c,
        items: f,
        onRemove: n ? _ : true
      }), g = n && (0, r.jsx)(s.Button, {
        disabled: f.length === d.length,
        text: "Reset",
        onClick: h
      });
      return "inline" === c ? (0, r.jsxs)(s.BJc, {
        gap: 24,
        children: [(0, r.jsx)("div", {
          style: {
            display: "flex",
            gap: 4
          },
          children: m
        }), g]
      }) : (0, r.jsxs)(s.BJc, {
        gap: 24,
        children: [m, g]
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