/** Chunk was on web.js **/
/** chunk id: 275846, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  i: () => l
}), require("./781311.js");
var Chunk54381 = require("./54381.js"),
  Chunk49800 = require("./49800.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk383838 = require("./383838.jsx"),
  Chunk512983 = require("./512983.jsx");
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
        hasButton: s
      } = e, l = s ? (0, r.jsx)(o.Button, {
        text: "Action"
      }) : true;
      return (0, r.jsx)(a.To, {
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
        defaultValue: Chunk49800.Z.Types.DANGER,
        options: [{
          label: "Primary",
          value: Chunk49800.Z.Types.PRIMARY
        }, {
          label: "Danger",
          value: Chunk49800.Z.Types.DANGER
        }, {
          label: "Warning",
          value: Chunk49800.Z.Types.WARNING
        }, {
          label: "Success",
          value: Chunk49800.Z.Types.SUCCESS
        }, {
          label: "Brand",
          value: Chunk49800.Z.Types.BRAND
        }, {
          label: "Custom",
          value: Chunk49800.Z.Types.CUSTOM
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
        errorMessage: o
      } = e, a = (null == o ? true : o.trim()) === "" ? true : o, l = ["h1", "h2", "h3", "h4", "h5", "legend"];
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
          }), (0, r.jsx)(s.v, {
            "data-migration-pending": true,
            tag: e,
            disabled: n,
            required: i,
            error: a,
            errorId: null != a ? "error-id-".concat(e) : true,
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