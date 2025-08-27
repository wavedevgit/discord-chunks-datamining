/** Chunk was on web.js **/
/** chunk id: 275846, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  i: () => _
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk49800 = require("./49800.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk770102 = require("./770102.jsx"),
  Chunk434333 = require("./434333.jsx"),
  Chunk540863 = require("./540863.jsx"),
  Chunk722187 = require("./722187.jsx"),
  Chunk383838 = require("./383838.jsx"),
  Chunk789164 = require("./789164.jsx"),
  Chunk231338 = require("./231338.js");
let _ = {
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
      } = e, s = o ? (0, r.jsx)(a.zxk, {
        text: "Action"
      }) : true;
      return (0, r.jsx)(u.To, {
        type: t,
        title: n,
        body: i,
        button: s
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
        hasError: n,
        disabled: i,
        required: o,
        tag: s
      } = e, c = n ? "This field has an error" : true;
      return (0, r.jsx)(l.x, {
        title: t,
        error: c,
        disabled: i,
        required: o,
        tag: s,
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
      hasError: {
        type: "boolean",
        label: "Has Error",
        defaultValue: false
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
    id: "formlabel",
    name: "FormLabel",
    component: function(e) {
      let {
        children: t,
        disabled: n,
        required: i
      } = e;
      return (0, r.jsx)(c.l, {
        disabled: n,
        required: i,
        htmlFor: "sample-input",
        children: t
      })
    },
    controls: {
      children: {
        type: "text",
        label: "Label Text",
        defaultValue: "Field Label"
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
      }
    }
  }, {
    id: "formdivider",
    name: "FormDivider",
    component: function(e) {
      let {} = e;
      return (0, r.jsxs)("div", {
        children: [(0, r.jsx)(a.Text, {
          variant: "text-md/normal",
          children: "Content above divider"
        }), (0, r.jsx)(o.$, {}), (0, r.jsx)(a.Text, {
          variant: "text-md/normal",
          children: "Content below divider"
        })]
      })
    },
    controls: {}
  }, {
    id: "formsection",
    name: "FormSection",
    component: function(e) {
      let {
        title: t,
        disabled: n,
        tag: i
      } = e;
      return (0, r.jsxs)(d.h, {
        title: t,
        disabled: n,
        tag: i,
        children: [(0, r.jsx)(a.Text, {
          variant: "text-md/normal",
          children: "This is content within the form section."
        }), (0, r.jsx)(a.oil, {
          placeholder: "Enter text here..."
        })]
      })
    },
    controls: {
      title: {
        type: "text",
        label: "Title",
        defaultValue: "Section Title"
      },
      disabled: {
        type: "boolean",
        label: "Disabled",
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
    id: "formerrorblock",
    name: "FormErrorBlock",
    component: function(e) {
      let {
        children: t,
        backgroundColor: n,
        hasDismiss: i,
        iconType: o
      } = e, l = "check" === o ? a.owK : a.Mgn;
      return (0, r.jsx)(s.k, {
        backgroundColor: n,
        onDismiss: i ? f.dG : true,
        icon: l,
        children: t
      })
    },
    controls: {
      children: {
        type: "text",
        label: "Error Message",
        defaultValue: "This is an error message that needs attention."
      },
      backgroundColor: {
        type: "select",
        label: "Background Color",
        defaultValue: Chunk434333.m.RED,
        options: [{
          label: "Red",
          value: Chunk434333.m.RED
        }, {
          label: "Background Tertiary",
          value: Chunk434333.m.BACKGROUND_TERTIARY
        }, {
          label: "Background Accent",
          value: Chunk434333.m.BACKGROUND_ACCENT
        }]
      },
      hasDismiss: {
        type: "boolean",
        label: "Has Dismiss Button",
        defaultValue: false
      },
      iconType: {
        type: "select",
        label: "Icon Type",
        defaultValue: "error",
        options: [{
          label: "Error",
          value: "error"
        }, {
          label: "Check",
          value: "check"
        }]
      }
    }
  }]
}