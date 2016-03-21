from django.conf.urls import patterns
from django.views.generic import TemplateView

urlpatterns = patterns('',
    (r'^angular/$', TemplateView.as_view(template_name="index.html")),
    (r'^inject-builtin/$', TemplateView.as_view(template_name="inject_builtin.html")),
    (r'^inject-custom/$', TemplateView.as_view(template_name="inject_custom.html")),
    (r'^config-run-blocks/$', TemplateView.as_view(template_name="config_run_blocks.html")),
    (r'^scope-controller/$', TemplateView.as_view(template_name="scope-controller.html")),
    (r'^scope-template/$', TemplateView.as_view(template_name="scope_template.html")),
    (r'^scope-hierarchy/$', TemplateView.as_view(template_name="scope-hierarchy.html")),
    (r'^expressions-basic/$', TemplateView.as_view(template_name="expressions_basic.html")),
    (r'^expressions-scope/$', TemplateView.as_view(template_name="expressions_scope.html")),
    (r'^expressions-javascript/$', TemplateView.as_view(template_name="expressions_javascript.html")),
    (r'^filters/$', TemplateView.as_view(template_name="filters.html")),
    (r'^filter-sort/$', TemplateView.as_view(template_name="filter_sort.html")),
    (r'^filter-custom/$', TemplateView.as_view(template_name="filter_custom.html")),
    (r'^directive-include/$', TemplateView.as_view(template_name="directive_include.html")),
    (r'^directive-forms/$', TemplateView.as_view(template_name="directive_forms.html")),
)