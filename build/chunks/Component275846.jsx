/** Chunk was on web.js **/
/** chunk id: 275846, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  i: () => c
}), require("./781311.js");
var Chunk951288 = require("./951288.js"),
  Chunk49800 = require("./49800.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk540863 = require("./540863.jsx"),
  Chunk383838 = require("./383838.jsx"),
  Chunk512983 = require("./512983.jsx");
let c = {
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
      return (0, r.jsx)(s.To, {
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
    id: "formitem",
    name: "FormItem",
    component: function(e) {
      let {
        title: t,
        errorMessage: n,
        disabled: i,
        required: s,
        tag: l
      } = e, c = (null == n ? true : n.trim()) === "" ? true : n;
      return (0, r.jsx)(o.x, {
        title: t,
        error: c,
        disabled: i,
        required: s,
        tag: l,
        children: (0, r.jsx)(a.oil, {
          placeholder: "Enter text here..."
        })
      })
    },
    controls: {
      title: {
        type: "text",
        label: "Title",
        defaultValue: "Form Field"
      },
      errorMessage: {
        type: "text",
        label: "Error Message",
        defaultValue: ""
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
      tag: {
        type: "select",
        label: "Title Tag",
        defaultValue: "h5",
        options: [{
          label: "H1",
          value: "h1"
        }, {
          label: "H2",
          value: "h2"
        }, {
          label: "H3",
          value: "h3"
        }, {
          label: "H4",
          value: "h4"
        }, {
          label: "H5",
          value: "h5"
        }, {
          label: "Label",
          value: "label"
        }, {
          label: "Legend",
          value: "legend"
        }]
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
      } = e, o = (null == a ? true : a.trim()) === "" ? true : a, s = ["h1", "h2", "h3", "h4", "h5", "legend"];
      return (0, r.jsx)("div", {
        style: {
          display: "flex",
          flexDirection: "column",
          gap: "16px"
        },
        children: s.map(e => (0, r.jsxs)("div", {
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
          }), (0, r.jsx)(l.v, {
            tag: e,
            disabled: n,
            required: i,
            error: o,
            errorId: null != o ? "error-id-".concat(e) : true,
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