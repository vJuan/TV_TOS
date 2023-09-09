

#This script is based on the https://usethinkscript.com/  amazing scripting comunity ideas
#and the professor's from Day Trading for success brilliant idea of tracking 5 min candles while tradin on the 1 min time frame.
#chatgpt and AI in general are just a collection of all the data sets fed to the neural networks that are created by humans


input displayVerticalLines = yes;


#if the color overwhels the chart one solution due to thinkscript limitations could not be programed unfortunately
#would be to open the ustudy settings by clicking the beaker icon then clicking the cog wheel clicking on the color
#then clicking on the more option finally clicking on the RGB and lowering the gamma to the desired setting

#Color RGB(gray) from TOS grid
defineGlobalColor("V", createColor(59, 59, 59));

#my preference
#defineGlobalColor("V",color.white);

#uses the addverticalLine Thinkscript function checks if in 1 min timeframe and displays the grid else (in any other time frame) the lines are not displayed

AddVerticalLine(GetAggregationPeriod() == AggregationPeriod.MIN and displayVerticalLines and SecondsFromTime(0930) == 0, "", GlobalColor("V"));
AddVerticalLine(GetAggregationPeriod() == AggregationPeriod.MIN and displayVerticalLines and SecondsFromTime(0935) == 0, "", GlobalColor("V"));
AddVerticalLine(GetAggregationPeriod() == AggregationPeriod.MIN and displayVerticalLines and SecondsFromTime(0940) == 0, "", GlobalColor("V"));
AddVerticalLine(GetAggregationPeriod() == AggregationPeriod.MIN and displayVerticalLines and SecondsFromTime(0945) == 0, "", GlobalColor("V"));
AddVerticalLine(GetAggregationPeriod() == AggregationPeriod.MIN and displayVerticalLines and SecondsFromTime(0950) == 0, "", GlobalColor("V"));
AddVerticalLine(GetAggregationPeriod() == AggregationPeriod.MIN and displayVerticalLines and SecondsFromTime(0955) == 0, "", GlobalColor("V"));

AddVerticalLine(GetAggregationPeriod() == AggregationPeriod.MIN and displayVerticalLines and SecondsFromTime(1000) == 0, "", GlobalColor("V"));
AddVerticalLine(GetAggregationPeriod() == AggregationPeriod.MIN and displayVerticalLines and SecondsFromTime(1005) == 0, "", GlobalColor("V"));
AddVerticalLine(GetAggregationPeriod() == AggregationPeriod.MIN and displayVerticalLines and SecondsFromTime(1010) == 0, "", GlobalColor("V"));
AddVerticalLine(GetAggregationPeriod() == AggregationPeriod.MIN and displayVerticalLines and SecondsFromTime(1015) == 0, "", GlobalColor("V"));
AddVerticalLine(GetAggregationPeriod() == AggregationPeriod.MIN and displayVerticalLines and SecondsFromTime(1020) == 0, "", GlobalColor("V"));
AddVerticalLine(GetAggregationPeriod() == AggregationPeriod.MIN and displayVerticalLines and SecondsFromTime(1025) == 0, "", GlobalColor("V"));
AddVerticalLine(GetAggregationPeriod() == AggregationPeriod.MIN and displayVerticalLines and SecondsFromTime(1030) == 0, "", GlobalColor("V"));
AddVerticalLine(GetAggregationPeriod() == AggregationPeriod.MIN and displayVerticalLines and SecondsFromTime(1035) == 0, "", GlobalColor("V"));
AddVerticalLine(GetAggregationPeriod() == AggregationPeriod.MIN and displayVerticalLines and SecondsFromTime(1040) == 0, "", GlobalColor("V"));
AddVerticalLine(GetAggregationPeriod() == AggregationPeriod.MIN and displayVerticalLines and SecondsFromTime(1045) == 0, "", GlobalColor("V"));
AddVerticalLine(GetAggregationPeriod() == AggregationPeriod.MIN and displayVerticalLines and SecondsFromTime(1050) == 0, "", GlobalColor("V"));
AddVerticalLine(GetAggregationPeriod() == AggregationPeriod.MIN and displayVerticalLines and SecondsFromTime(1055) == 0, "", GlobalColor("V"));

AddVerticalLine(GetAggregationPeriod() == AggregationPeriod.MIN and displayVerticalLines and SecondsFromTime(1100) == 0, "", GlobalColor("V"));
AddVerticalLine(GetAggregationPeriod() == AggregationPeriod.MIN and displayVerticalLines and SecondsFromTime(1105) == 0, "", GlobalColor("V"));
AddVerticalLine(GetAggregationPeriod() == AggregationPeriod.MIN and displayVerticalLines and SecondsFromTime(1110) == 0, "", GlobalColor("V"));
AddVerticalLine(GetAggregationPeriod() == AggregationPeriod.MIN and displayVerticalLines and SecondsFromTime(1115) == 0, "", GlobalColor("V"));
AddVerticalLine(GetAggregationPeriod() == AggregationPeriod.MIN and displayVerticalLines and SecondsFromTime(1120) == 0, "", GlobalColor("V"));
AddVerticalLine(GetAggregationPeriod() == AggregationPeriod.MIN and displayVerticalLines and SecondsFromTime(1125) == 0, "", GlobalColor("V"));
AddVerticalLine(GetAggregationPeriod() == AggregationPeriod.MIN and displayVerticalLines and SecondsFromTime(1130) == 0, "", GlobalColor("V"));
AddVerticalLine(GetAggregationPeriod() == AggregationPeriod.MIN and displayVerticalLines and SecondsFromTime(1135) == 0, "", GlobalColor("V"));
AddVerticalLine(GetAggregationPeriod() == AggregationPeriod.MIN and displayVerticalLines and SecondsFromTime(1140) == 0, "", GlobalColor("V"));
AddVerticalLine(GetAggregationPeriod() == AggregationPeriod.MIN and displayVerticalLines and SecondsFromTime(1145) == 0, "", GlobalColor("V"));
AddVerticalLine(GetAggregationPeriod() == AggregationPeriod.MIN and displayVerticalLines and SecondsFromTime(1150) == 0, "", GlobalColor("V"));
AddVerticalLine(GetAggregationPeriod() == AggregationPeriod.MIN and displayVerticalLines and SecondsFromTime(1155) == 0, "", GlobalColor("V"));

AddVerticalLine(GetAggregationPeriod() == AggregationPeriod.MIN and displayVerticalLines and SecondsFromTime(1200) == 0, "", GlobalColor("V"));
AddVerticalLine(GetAggregationPeriod() == AggregationPeriod.MIN and displayVerticalLines and SecondsFromTime(1205) == 0, "", GlobalColor("V"));
AddVerticalLine(GetAggregationPeriod() == AggregationPeriod.MIN and displayVerticalLines and SecondsFromTime(1210) == 0, "", GlobalColor("V"));
AddVerticalLine(GetAggregationPeriod() == AggregationPeriod.MIN and displayVerticalLines and SecondsFromTime(1215) == 0, "", GlobalColor("V"));
AddVerticalLine(GetAggregationPeriod() == AggregationPeriod.MIN and displayVerticalLines and SecondsFromTime(1220) == 0, "", GlobalColor("V"));
AddVerticalLine(GetAggregationPeriod() == AggregationPeriod.MIN and displayVerticalLines and SecondsFromTime(1225) == 0, "", GlobalColor("V"));
AddVerticalLine(GetAggregationPeriod() == AggregationPeriod.MIN and displayVerticalLines and SecondsFromTime(1230) == 0, "", GlobalColor("V"));
AddVerticalLine(GetAggregationPeriod() == AggregationPeriod.MIN and displayVerticalLines and SecondsFromTime(1235) == 0, "", GlobalColor("V"));
AddVerticalLine(GetAggregationPeriod() == AggregationPeriod.MIN and displayVerticalLines and SecondsFromTime(1240) == 0, "", GlobalColor("V"));
AddVerticalLine(GetAggregationPeriod() == AggregationPeriod.MIN and displayVerticalLines and SecondsFromTime(1245) == 0, "", GlobalColor("V"));
AddVerticalLine(GetAggregationPeriod() == AggregationPeriod.MIN and displayVerticalLines and SecondsFromTime(1250) == 0, "", GlobalColor("V"));
AddVerticalLine(GetAggregationPeriod() == AggregationPeriod.MIN and displayVerticalLines and SecondsFromTime(1255) == 0, "", GlobalColor("V"));

AddVerticalLine(GetAggregationPeriod() == AggregationPeriod.MIN and displayVerticalLines and SecondsFromTime(1300) == 0, "", GlobalColor("V"));
AddVerticalLine(GetAggregationPeriod() == AggregationPeriod.MIN and displayVerticalLines and SecondsFromTime(1305) == 0, "", GlobalColor("V"));
AddVerticalLine(GetAggregationPeriod() == AggregationPeriod.MIN and displayVerticalLines and SecondsFromTime(1310) == 0, "", GlobalColor("V"));
AddVerticalLine(GetAggregationPeriod() == AggregationPeriod.MIN and displayVerticalLines and SecondsFromTime(1315) == 0, "", GlobalColor("V"));
AddVerticalLine(GetAggregationPeriod() == AggregationPeriod.MIN and displayVerticalLines and SecondsFromTime(1320) == 0, "", GlobalColor("V"));
AddVerticalLine(GetAggregationPeriod() == AggregationPeriod.MIN and displayVerticalLines and SecondsFromTime(1325) == 0, "", GlobalColor("V"));
AddVerticalLine(GetAggregationPeriod() == AggregationPeriod.MIN and displayVerticalLines and SecondsFromTime(1330) == 0, "", GlobalColor("V"));
AddVerticalLine(GetAggregationPeriod() == AggregationPeriod.MIN and displayVerticalLines and SecondsFromTime(1335) == 0, "", GlobalColor("V"));
AddVerticalLine(GetAggregationPeriod() == AggregationPeriod.MIN and displayVerticalLines and SecondsFromTime(1340) == 0, "", GlobalColor("V"));
AddVerticalLine(GetAggregationPeriod() == AggregationPeriod.MIN and displayVerticalLines and SecondsFromTime(1345) == 0, "", GlobalColor("V"));
AddVerticalLine(GetAggregationPeriod() == AggregationPeriod.MIN and displayVerticalLines and SecondsFromTime(1350) == 0, "", GlobalColor("V"));
AddVerticalLine(GetAggregationPeriod() == AggregationPeriod.MIN and displayVerticalLines and SecondsFromTime(1355) == 0, "", GlobalColor("V"));

AddVerticalLine(GetAggregationPeriod() == AggregationPeriod.MIN and displayVerticalLines and SecondsFromTime(1400) == 0, "", GlobalColor("V"));
AddVerticalLine(GetAggregationPeriod() == AggregationPeriod.MIN and displayVerticalLines and SecondsFromTime(1405) == 0, "", GlobalColor("V"));
AddVerticalLine(GetAggregationPeriod() == AggregationPeriod.MIN and displayVerticalLines and SecondsFromTime(1410) == 0, "", GlobalColor("V"));
AddVerticalLine(GetAggregationPeriod() == AggregationPeriod.MIN and displayVerticalLines and SecondsFromTime(1415) == 0, "", GlobalColor("V"));
AddVerticalLine(GetAggregationPeriod() == AggregationPeriod.MIN and displayVerticalLines and SecondsFromTime(1420) == 0, "", GlobalColor("V"));
AddVerticalLine(GetAggregationPeriod() == AggregationPeriod.MIN and displayVerticalLines and SecondsFromTime(1425) == 0, "", GlobalColor("V"));
AddVerticalLine(GetAggregationPeriod() == AggregationPeriod.MIN and displayVerticalLines and SecondsFromTime(1430) == 0, "", GlobalColor("V"));
AddVerticalLine(GetAggregationPeriod() == AggregationPeriod.MIN and displayVerticalLines and SecondsFromTime(1435) == 0, "", GlobalColor("V"));
AddVerticalLine(GetAggregationPeriod() == AggregationPeriod.MIN and displayVerticalLines and SecondsFromTime(1440) == 0, "", GlobalColor("V"));
AddVerticalLine(GetAggregationPeriod() == AggregationPeriod.MIN and displayVerticalLines and SecondsFromTime(1445) == 0, "", GlobalColor("V"));
AddVerticalLine(GetAggregationPeriod() == AggregationPeriod.MIN and displayVerticalLines and SecondsFromTime(1450) == 0, "", GlobalColor("V"));
AddVerticalLine(GetAggregationPeriod() == AggregationPeriod.MIN and displayVerticalLines and SecondsFromTime(1455) == 0, "", GlobalColor("V"));

AddVerticalLine(GetAggregationPeriod() == AggregationPeriod.MIN and displayVerticalLines and SecondsFromTime(1500) == 0, "", GlobalColor("V"));
AddVerticalLine(GetAggregationPeriod() == AggregationPeriod.MIN and displayVerticalLines and SecondsFromTime(1505) == 0, "", GlobalColor("V"));
AddVerticalLine(GetAggregationPeriod() == AggregationPeriod.MIN and displayVerticalLines and SecondsFromTime(1510) == 0, "", GlobalColor("V"));
AddVerticalLine(GetAggregationPeriod() == AggregationPeriod.MIN and displayVerticalLines and SecondsFromTime(1515) == 0, "", GlobalColor("V"));
AddVerticalLine(GetAggregationPeriod() == AggregationPeriod.MIN and displayVerticalLines and SecondsFromTime(1520) == 0, "", GlobalColor("V"));
AddVerticalLine(GetAggregationPeriod() == AggregationPeriod.MIN and displayVerticalLines and SecondsFromTime(1525) == 0, "", GlobalColor("V"));
AddVerticalLine(GetAggregationPeriod() == AggregationPeriod.MIN and displayVerticalLines and SecondsFromTime(1530) == 0, "", GlobalColor("V"));
AddVerticalLine(GetAggregationPeriod() == AggregationPeriod.MIN and displayVerticalLines and SecondsFromTime(1535) == 0, "", GlobalColor("V"));
AddVerticalLine(GetAggregationPeriod() == AggregationPeriod.MIN and displayVerticalLines and SecondsFromTime(1540) == 0, "", GlobalColor("V"));
AddVerticalLine(GetAggregationPeriod() == AggregationPeriod.MIN and displayVerticalLines and SecondsFromTime(1545) == 0, "", GlobalColor("V"));
AddVerticalLine(GetAggregationPeriod() == AggregationPeriod.MIN and displayVerticalLines and SecondsFromTime(1550) == 0, "", GlobalColor("V"));
AddVerticalLine(GetAggregationPeriod() == AggregationPeriod.MIN and displayVerticalLines and SecondsFromTime(1555) == 0, "", GlobalColor("V"));

AddVerticalLine(GetAggregationPeriod() == AggregationPeriod.MIN and displayVerticalLines and SecondsFromTime(1600) == 0, "", GlobalColor("V"));
