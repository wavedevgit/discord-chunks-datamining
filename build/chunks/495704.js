/** Chunk was on web.js **/
/** chunk id: 495704, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  V: () => o
});
var Chunk945810 = require("./945810.js");

function i(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function a(e) {
  return (0, r.mj)({
    name: e,
    kind: "user",
    variations: {
      0: {
        enabled: false
      },
      1: {
        enabled: true
      }
    },
    defaultConfig: {
      enabled: false
    }
  })
}
class o {
  isEligibleForEditProfileUpsell() {
    return null != this.editProfileLinkedDc && null != this.editProfileUnlinkedDc
  }
  isEligibleForSuggestions() {
    return null != this.suggestedWidgetLinkedDc
  }
  constructor(e) {
    i(this, "applicationId", true), i(this, "widgetTemplateId", true), i(this, "viewExperiment", true), i(this, "editExperiment", true), i(this, "coachmarkExperiment", true), i(this, "editProfileUpsellImage", true), i(this, "heroPlaceholderImage", true), i(this, "miniPreviewImage", true), i(this, "editProfileUnlinkedDc", true), i(this, "editProfileLinkedDc", true), i(this, "suggestedWidgetLinkedDc", true), this.applicationId = e.application_id, this.widgetTemplateId = e.widget_template_id, this.viewExperiment = a(e.view_experiment), this.editExperiment = a(e.edit_experiment), this.coachmarkExperiment = null != e.coachmark_experiment ? a(e.coachmark_experiment) : true, this.editProfileUpsellImage = e.edit_profile_upsell_image, this.heroPlaceholderImage = e.hero_placeholder_image, this.miniPreviewImage = e.mini_preview_image, this.editProfileUnlinkedDc = e.edit_profile_unlinked_dc, this.editProfileLinkedDc = e.edit_profile_linked_dc, this.suggestedWidgetLinkedDc = e.suggested_widget_linked_dc
  }
}