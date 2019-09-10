<?xml version="1.0" encoding="UTF-8"?>
<!--The point of xsl is to style xml elements and attributes-->
<!--Need to incorporate xml version> -->

<xsl:stylesheet version="1.0"
 xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

<xsl:template match="/">  <!-- Applies to the top element of an xml doc-->

<!--Create a place for the xml to go into -->

<table border='1'  width="80%" height="100%">
    <tr bgcolor="beige">
        <th style="text-align:center">Character Name</th>
        <th style="text-allgn:left">Personallity</th>
        <th style="text-allgn:left">Weapon</th>
        <th style="text-allgn:left">Gender</th>
        
    </tr>
    <!--For each Chracter record in Characters -->
    <xsl:for-each select="characters/character">
    <tr>
    <!--Grab the value of each character property -->
        <td><xsl:value-of select ="name"/></td>
        <td><xsl:value-of select ="personallity" /></td>
        <td><xsl:value-of select = "weapon"/></td>
        <td><xsl:value-of select = "gender"/></td>
    </tr>
    </xsl:for-each>
</table>
</xsl:template>

</xsl:stylesheet>



