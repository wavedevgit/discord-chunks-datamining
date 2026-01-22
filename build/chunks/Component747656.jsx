/** Chunk was on 22477 **/
/** chunk id: 747656, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => m
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk155718 = require("./155718.js"),
  Chunk935649 = require("./935649.jsx"),
  Chunk847599 = require("./847599.js"),
  Chunk287809 = require("./287809.js"),
  Chunk805866 = require("./805866.js"),
  Chunk206348 = require("./206348.jsx");
let m = function(e) {
  let {
    onSubmit: t
  } = e, n = (0, l.bG)([c.default], () => c.default.getCurrentUser());
  return (0, a.jsx)(u.Z, {
    title: "Lorem ipsum dolor",
    actions: [{
      text: "Consectetur adipiscing",
      variant: "primary",
      onClick: () => {
        (null == n ? true : n.ageVerificationStatus) === r.Tk.UNVERIFIED ? s.A.showAgeVerificationGetStartedModal({
          entryPoint: o.q1.SAFETY_FLOWS,
          onClose: () => t({
            type: d.Ij.Empty
          })
        }) : t({
          type: d.Ij.Empty
        })
      }
    }],
    children: (0, a.jsxs)(i.BJc, {
      gap: 8,
      children: [(0, a.jsx)(i.Text, {
        variant: "text-md/normal",
        children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      }), (0, a.jsx)(i.Text, {
        variant: "text-md/normal",
        children: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      }), (0, a.jsx)(i.Text, {
        variant: "text-md/normal",
        children: "Ut enim ad minim veniam quis"
      })]
    })
  })
}