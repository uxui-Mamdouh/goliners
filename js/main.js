$(document).ready(function() {
    $('.owl-carousel').owlCarousel({
        stagePadding: 300, // تعيين هامش للعناصر في المرحلة الوسطى
        loop: true,
        margin: 48,
        nav: true,
        responsive: {
            0: {
                items: 1,
                stagePadding: 20 // يمكنك تعديل هامش المرحلة في حالة الشاشات الصغيرة
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });

    // $('.tab').on('click', function() {
    //     const tabId = $(this).data('tab');
        
    //     // Hide all tab contents
    //     $('.tab-content').removeClass('active');

    //     // Show the selected tab content
    //     $('#' + tabId).addClass('active');
    //     console.log('#' + tabId);

    //     // Remove active class from all tabs
    //     $('.tab').removeClass('active');

    //     // Add active class to the clicked tab
    //     $(this).addClass('active');
    // });
    $('.tab').on('click', function() {
        const tabId = $(this).data('tab');
        
        // Get the section context
        const sectionContext = $(this).closest('.brand-item'); // قم بتغيير 'your-section-class' إلى الكلاس الصحيح للسكشن الخاص بك
    
        // Hide all tab contents within the section
        $('.tab-content', sectionContext).removeClass('active');
    
        // Show the selected tab content
        $('#' + tabId, sectionContext).addClass('active');
        console.log('#' + tabId);
    
        // Remove active class from all tabs within the section
        $('.tab', sectionContext).removeClass('active');
    
        // Add active class to the clicked tab
        $(this).addClass('active');
    });
    





        var itemsMainDiv = ('.MultiCarousel');
        var itemsDiv = ('.MultiCarousel-inner');
        var itemWidth = "";
    
        $('.leftLst, .rightLst').click(function () {
            var condition = $(this).hasClass("leftLst");
            if (condition)
                click(0, this);
            else
                click(1, this)
        });
    
       ResCarouselSize();
    
    
    
    
        $(window).resize(function () {
            ResCarouselSize();
        });
    
        //this function define the size of the items
        function ResCarouselSize() {
            var incno = 0;
            var dataItems = ("data-items");
            var itemClass = ('.item');
            var id = 0;
            var btnParentSb = '';
            var itemsSplit = '';
            var sampwidth = $(itemsMainDiv).width();
            var bodyWidth = $('body').width();
            $(itemsDiv).each(function () {
                id = id + 1;
                var itemNumbers = $(this).find(itemClass).length;
                btnParentSb = $(this).parent().attr(dataItems);
                itemsSplit = btnParentSb.split(',');
                $(this).parent().attr("id", "MultiCarousel" + id);
    
    
                if (bodyWidth >= 1200) {
                    incno = itemsSplit[3];
                    itemWidth = sampwidth / incno;
                }
                else if (bodyWidth >= 992) {
                    incno = itemsSplit[2];
                    itemWidth = sampwidth / incno;
                }
                else if (bodyWidth >= 768) {
                    incno = itemsSplit[1];
                    itemWidth = sampwidth / incno;
                }
                else {
                    incno = itemsSplit[0];
                    itemWidth = sampwidth / incno;
                }
                $(this).css({ 'transform': 'translateX(0px)', 'width': itemWidth * itemNumbers });
                $(this).find(itemClass).each(function () {
                    $(this).outerWidth(itemWidth);
                });
    
                $(".leftLst").addClass("over");
                $(".rightLst").removeClass("over");
    
            });
        }
    
    
        //this function used to move the items
        function ResCarousel(e, el, s) {
            var leftBtn = ('.leftLst');
            var rightBtn = ('.rightLst');
            var translateXval = '';
            var divStyle = $(el + ' ' + itemsDiv).css('transform');
            var values = divStyle.match(/-?[\d\.]+/g);
            var xds = Math.abs(values[4]);
            if (e == 0) {
                translateXval = parseInt(xds) - parseInt(itemWidth * s);
                $(el + ' ' + rightBtn).removeClass("over");
    
                if (translateXval <= itemWidth / 2) {
                    translateXval = 0;
                    $(el + ' ' + leftBtn).addClass("over");
                }
            }
            else if (e == 1) {
                var itemsCondition = $(el).find(itemsDiv).width() - $(el).width();
                translateXval = parseInt(xds) + parseInt(itemWidth * s);
                $(el + ' ' + leftBtn).removeClass("over");
    
                if (translateXval >= itemsCondition - itemWidth / 2) {
                    translateXval = itemsCondition;
                    $(el + ' ' + rightBtn).addClass("over");
                }
            }
            $(el + ' ' + itemsDiv).css('transform', 'translateX(' + -translateXval + 'px)');
        }
    
        //It is used to get some elements from btn
        function click(ell, ee) {
            var Parent = "#" + $(ee).parent().attr("id");
            var slide = $(Parent).attr("data-slide");
            ResCarousel(ell, Parent, slide);
        }
    $('.flower-card a').on('click', function(){
        $('.flower-card').hide();
    });



       // عدد العناصر التي تظهر في البداية
       var itemsToShow = 3;

       // إظهار العناصر الأولى
       $(".brand-item:lt(" + itemsToShow + ")").show();

       // الضغط على زر "Load More"
       $("#loadMore").on("click", function () {
           showItems();
       });

       // دالة لإظهار العناصر
       function showItems() {
           // البحث عن العناصر التي لم تظهر
           var hiddenItems = $(".brand-item:hidden");

           // إظهار عدد محدد من العناصر
           for (var i = 0; i < itemsToShow && i < hiddenItems.length; i++) {
               $(hiddenItems[i]).show();
           }

           // إذا كانت جميع العناصر قد ظهرت، قم بإخفاء زر "Load More"
           if ($(".brand-item:hidden").length === 0) {
               $("#loadMore").hide();
           }
       }
    
});
