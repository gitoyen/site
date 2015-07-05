# coding: utf8
import jinja2

@jinja2.contextfilter
def is_active(ctx, page):
    return (ctx.get('output_file') == page.save_as or
            'blog' in ctx.get('output_file') and page.slug == 'blog')
