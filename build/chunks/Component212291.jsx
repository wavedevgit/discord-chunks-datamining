/** Chunk was on web.js **/
/** chunk id: 212291, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  s: () => l
}), require("./733351.js");
var Chunk627968 = require("./627968.js"),
  Chunk359778 = require("./359778.jsx"),
  Chunk397927 = require("./397927.js"),
  Chunk465430 = require("./465430.jsx"),
  Chunk742158 = require("./742158.jsx");
let l = {
  title: "Form Components",
  stories: [{
    id: "formnotice",
    name: "FormNotice",
    component: function(e) {
      let {
        type: t,
        title: n,
        body: i,
        hasButton: o
      } = e, l = o ? (0, r.jsx)(a.Button, {
        text: "Action"
      }) : true;
      return (0, r.jsx)(s.Nz, {
        "data-migration-pending": true,
        type: t,
        title: n,
        body: i,
        button: l
      })
    },
    controls: {
      type: {
        type: "select",
        label: "Type",
        defaultValue: Chunk359778.Z.Types.DANGER,
        options: [{
          label: "Primary",
          value: Chunk359778.Z.Types.PRIMARY
        }, {
          label: "Danger",
          value: Chunk359778.Z.Types.DANGER
        }, {
          label: "Warning",
          value: Chunk359778.Z.Types.WARNING
        }, {
          label: "Success",
          value: Chunk359778.Z.Types.SUCCESS
        }, {
          label: "Brand",
          value: Chunk359778.Z.Types.BRAND
        }, {
          label: "Custom",
          value: Chunk359778.Z.Types.CUSTOM
        }]
      },
      title: {
        type: "text",
        label: "Title",
        defaultValue: "Important Notice"
      },
      body: {
        type: "text",
        label: "Body",
        defaultValue: "This is an important message that you should pay attention to."
      },
      hasButton: {
        type: "boolean",
        label: "Has Button",
        defaultValue: false
      }
    }
  }, {
    id: "formtitle",
    name: "FormTitle",
    component: function(e) {
      let {
        children: t,
        disabled: n,
        required: i,
        errorMessage: a
      } = e, s = (null == a ? true : a.trim()) === "" ? true : a, l = ["h1", "h2", "h3", "h4", "h5", "legend"];
      return (0, r.jsx)("div", {
        style: {
          display: "flex",
          flexDirection: "column",
          gap: "16px"
        },
        children: l.map(e => (0, r.jsxs)("div", {
          style: {
            display: "flex",
            alignItems: "center",
            gap: "8px"
          },
          children: [(0, r.jsxs)("code", {
            style: {
              minWidth: "60px",
              fontSize: "12px",
              color: "#666"
            },
            children: [e, ":"]
          }), (0, r.jsx)(o.z, {
            "data-migration-pending": true,
            tag: e,
            disabled: n,
            required: i,
            error: s,
            errorId: null != s ? "error-id-".concat(e) : true,
            children: t
          })]
        }, e))
      })
    },
    controls: {
      children: {
        type: "text",
        label: "Title Text",
        defaultValue: "Form Title"
      },
      disabled: {
        type: "boolean",
        label: "Disabled",
        defaultValue: false
      },
      required: {
        type: "boolean",
        label: "Required",
        defaultValue: false
      },
      errorMessage: {
        type: "text",
        label: "Error Message",
        defaultValue: ""
      }
    }
  }]
}