/**
 * @author Stian Liknes <stianlik@gmail.com>
 */
(function($) {
    
    var translate = function(name, replacements) {
        if (replacements === null || replacements === undefined) {
            return name;
        }
        
        $.each(replacements, function(key, value) {
            name = name.replace(key, value);
        });
        
        return name;
    }
    
    var onClick = function(event) { 
        var assignments = [], replacements = $(this).data("formlink.replacements");
        
        event.preventDefault();
        
        $(this).data("formlink.targets").each(function(i,target) {
            assignments.push(translate(target.name, replacements) + "=" + $(target).val());
        });
        
        window.location = this.href + ((this.href.indexOf("?") === -1) ? '?' : '&') + assignments.join("&");
    }
    
    $.fn.formlink = function(targets, replacements) {
        if (targets === undefined) {
            this.each(function() {
                var el = $(this);
                el.data("formlink.targets", $(el.attr("data-formlink")) );
                el.data("formlink.replacements", $.parseJSON(el.attr("data-formlink-replacements")));
            });
        }
        else {
            this.data("formlink.targets", $(targets));
            this.data("formlink.replacements", replacements);
        }
        
        return this.off("click.formlink").on("click.formlink", onClick);  
    };
    
    $(document).ready(function() {
        $("a[data-formlink]").formlink();
    });
})(jQuery);