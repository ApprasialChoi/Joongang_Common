var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format___EPSG_4326_Ver02_1 = new ol.format.GeoJSON();
var features___EPSG_4326_Ver02_1 = format___EPSG_4326_Ver02_1.readFeatures(json___EPSG_4326_Ver02_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource___EPSG_4326_Ver02_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource___EPSG_4326_Ver02_1.addFeatures(features___EPSG_4326_Ver02_1);
var lyr___EPSG_4326_Ver02_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource___EPSG_4326_Ver02_1, 
                style: style___EPSG_4326_Ver02_1,
                popuplayertitle: '중앙전체_공통접수건_EPSG_4326_Ver0.2',
                interactive: true,
                title: '<img src="styles/legend/__EPSG_4326_Ver02_1.png" /> 중앙전체_공통접수건_EPSG_4326_Ver0.2'
            });
var format___EPSG_4326_Ver02_2 = new ol.format.GeoJSON();
var features___EPSG_4326_Ver02_2 = format___EPSG_4326_Ver02_2.readFeatures(json___EPSG_4326_Ver02_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource___EPSG_4326_Ver02_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource___EPSG_4326_Ver02_2.addFeatures(features___EPSG_4326_Ver02_2);
var lyr___EPSG_4326_Ver02_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource___EPSG_4326_Ver02_2, 
                style: style___EPSG_4326_Ver02_2,
                popuplayertitle: '중앙전체_공통접수건_EPSG_4326_Ver0.2 복사',
                interactive: true,
                title: '<img src="styles/legend/__EPSG_4326_Ver02_2.png" /> 중앙전체_공통접수건_EPSG_4326_Ver0.2 복사'
            });

lyr_OSMStandard_0.setVisible(true);lyr___EPSG_4326_Ver02_1.setVisible(true);lyr___EPSG_4326_Ver02_2.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr___EPSG_4326_Ver02_1,lyr___EPSG_4326_Ver02_2];
lyr___EPSG_4326_Ver02_1.set('fieldAliases', {'감정서번호': '감정서번호', '본사/지사': '본사/지사', '담당자': '담당자', '평가사': '평가사', '건명': '건명', '거래처명': '거래처명', '의뢰인': '의뢰인', '상태': '상태', '의뢰일자': '의뢰일자', '발송일자': '발송일자', '소유자전화': '소유자전화', '채무자': '채무자', '채무자전화': '채무자전화', '의뢰문서번': '의뢰문서번', '의뢰부서': '의뢰부서', '제출처': '제출처', '제출처(Tar': '제출처(Tar', '제출처(T_1': '제출처(T_1', '제출처(T_2': '제출처(T_2', '소유자': '소유자', '평가목적': '평가목적', '물건종류': '물건종류', '주소': '주소', '지번주소': '지번주소', '위도': '위도', '경도': '경도', '지번주소(2': '지번주소(2', '위도(2)': '위도(2)', '경도(2)': '경도(2)', });
lyr___EPSG_4326_Ver02_2.set('fieldAliases', {'감정서번호': '감정서번호', '본사/지사': '본사/지사', '담당자': '담당자', '평가사': '평가사', '건명': '건명', '거래처명': '거래처명', '의뢰인': '의뢰인', '상태': '상태', '의뢰일자': '의뢰일자', '발송일자': '발송일자', '소유자전화': '소유자전화', '채무자': '채무자', '채무자전화': '채무자전화', '의뢰문서번': '의뢰문서번', '의뢰부서': '의뢰부서', '제출처': '제출처', '제출처(Tar': '제출처(Tar', '제출처(T_1': '제출처(T_1', '제출처(T_2': '제출처(T_2', '소유자': '소유자', '평가목적': '평가목적', '물건종류': '물건종류', '주소': '주소', '지번주소': '지번주소', '위도': '위도', '경도': '경도', '지번주소(2': '지번주소(2', '위도(2)': '위도(2)', '경도(2)': '경도(2)', });
lyr___EPSG_4326_Ver02_1.set('fieldImages', {'감정서번호': 'TextEdit', '본사/지사': 'TextEdit', '담당자': 'TextEdit', '평가사': 'TextEdit', '건명': 'TextEdit', '거래처명': 'TextEdit', '의뢰인': 'TextEdit', '상태': 'TextEdit', '의뢰일자': 'TextEdit', '발송일자': 'TextEdit', '소유자전화': 'TextEdit', '채무자': 'TextEdit', '채무자전화': 'TextEdit', '의뢰문서번': 'TextEdit', '의뢰부서': 'TextEdit', '제출처': 'TextEdit', '제출처(Tar': 'TextEdit', '제출처(T_1': 'TextEdit', '제출처(T_2': 'TextEdit', '소유자': 'TextEdit', '평가목적': 'TextEdit', '물건종류': 'TextEdit', '주소': 'TextEdit', '지번주소': 'TextEdit', '위도': 'TextEdit', '경도': 'TextEdit', '지번주소(2': 'TextEdit', '위도(2)': 'TextEdit', '경도(2)': 'TextEdit', });
lyr___EPSG_4326_Ver02_2.set('fieldImages', {'감정서번호': 'TextEdit', '본사/지사': 'TextEdit', '담당자': 'TextEdit', '평가사': 'TextEdit', '건명': 'TextEdit', '거래처명': 'TextEdit', '의뢰인': 'TextEdit', '상태': 'TextEdit', '의뢰일자': 'TextEdit', '발송일자': 'TextEdit', '소유자전화': 'TextEdit', '채무자': 'TextEdit', '채무자전화': 'TextEdit', '의뢰문서번': 'TextEdit', '의뢰부서': 'TextEdit', '제출처': 'TextEdit', '제출처(Tar': 'TextEdit', '제출처(T_1': 'TextEdit', '제출처(T_2': 'TextEdit', '소유자': 'TextEdit', '평가목적': 'TextEdit', '물건종류': 'TextEdit', '주소': 'TextEdit', '지번주소': 'TextEdit', '위도': 'TextEdit', '경도': 'TextEdit', '지번주소(2': 'TextEdit', '위도(2)': 'TextEdit', '경도(2)': 'TextEdit', });
lyr___EPSG_4326_Ver02_1.set('fieldLabels', {'감정서번호': 'no label', '본사/지사': 'no label', '담당자': 'no label', '평가사': 'no label', '건명': 'no label', '거래처명': 'no label', '의뢰인': 'no label', '상태': 'no label', '의뢰일자': 'no label', '발송일자': 'no label', '소유자전화': 'no label', '채무자': 'no label', '채무자전화': 'no label', '의뢰문서번': 'no label', '의뢰부서': 'no label', '제출처': 'inline label - always visible', '제출처(Tar': 'no label', '제출처(T_1': 'no label', '제출처(T_2': 'no label', '소유자': 'no label', '평가목적': 'no label', '물건종류': 'no label', '주소': 'no label', '지번주소': 'no label', '위도': 'no label', '경도': 'no label', '지번주소(2': 'no label', '위도(2)': 'no label', '경도(2)': 'no label', });
lyr___EPSG_4326_Ver02_2.set('fieldLabels', {'감정서번호': 'no label', '본사/지사': 'no label', '담당자': 'inline label - always visible', '평가사': 'no label', '건명': 'no label', '거래처명': 'no label', '의뢰인': 'no label', '상태': 'no label', '의뢰일자': 'no label', '발송일자': 'no label', '소유자전화': 'no label', '채무자': 'no label', '채무자전화': 'no label', '의뢰문서번': 'no label', '의뢰부서': 'no label', '제출처': 'no label', '제출처(Tar': 'no label', '제출처(T_1': 'no label', '제출처(T_2': 'no label', '소유자': 'no label', '평가목적': 'no label', '물건종류': 'no label', '주소': 'no label', '지번주소': 'no label', '위도': 'no label', '경도': 'no label', '지번주소(2': 'no label', '위도(2)': 'no label', '경도(2)': 'no label', });
lyr___EPSG_4326_Ver02_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});